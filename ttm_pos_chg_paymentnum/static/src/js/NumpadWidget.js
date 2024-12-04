/** @odoo-module */
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";

// const CUSTOM_INPUT_KEYS = new Set(["+1000", "+2000", "+5000"]);

patch(PaymentScreen.prototype, {
    get _getNumberBufferConfig() {
      const config = super._getNumberBufferConfig;
      config['triggerAtInput'] = (...args) => this.updateSelectedPaymentlineNew(...args);
      return config;
  },
  updateSelectedPaymentlineNew({ buffer, key }, amount = false) {
    
    if (this.paymentLines.every((line) => line.paid)) {
        this.currentOrder.add_paymentline(this.payment_methods_from_config[0]);
    }
    if (!this.selectedPaymentLine) {
        return;
    } // do nothing if no selected payment line
    if (amount === false) {
        if (this.numberBuffer.get() === null) {
            amount = null;
        } else if (this.numberBuffer.get() === "") {
            amount = 0;
        } else {
            amount = this.numberBuffer.getFloat();
        }

    }
    console.debug('Debug in here');
    if(['+10','+20','+50'].includes(key)){
        let iKey = parseInt(key,10)
        if(this.currentOrder.get_due() == 0){
            amount = iKey * 1000;
        } else  {
            let current = this.selectedPaymentLine.amount;
            amount = current + iKey * 1000;
        }
    }
    // disable changing amount on paymentlines with running or done payments on a payment terminal
    const payment_terminal = this.selectedPaymentLine.payment_method.payment_terminal;
    const hasCashPaymentMethod = this.payment_methods_from_config.some(
        (method) => method.type === "cash"
    );
    if (
        !hasCashPaymentMethod &&
        amount > this.currentOrder.get_due() + this.selectedPaymentLine.amount
    ) {
        this.selectedPaymentLine.set_amount(0);
        this.numberBuffer.set(this.currentOrder.get_due().toString());
        amount = this.currentOrder.get_due();
        this.showMaxValueError();
    }
    if (
        payment_terminal &&
        !["pending", "retry"].includes(this.selectedPaymentLine.get_payment_status())
    ) {
        return;
    }
    if (amount === null) {
        this.deletePaymentLine(this.selectedPaymentLine.cid);
    } else {
        this.selectedPaymentLine.set_amount(amount);
    }
  },
  getNumpadButtons() {
    return [
      { value: "1" },
      { value: "2" },
      { value: "3" },
      { value: "+10", text: "+10.000" },
      { value: "4" },
      { value: "5" },
      { value: "6" },
      { value: "+20", text: "+20.000" },
      { value: "7" },
      { value: "8" },
      { value: "9" },
      { value: "+50", text: "+50.000" },
      { value: "-", text: "+/-" },
      { value: "0" },
      { value: this.env.services.localization.decimalPoint },
      { value: "Backspace", text: "⌫" },
    ];
  },
});
