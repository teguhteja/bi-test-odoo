# -*- coding: utf-8 -*-
{
    'name': "POS Auto Send Email",

    'summary': "Send email to customer after payment",

    'description': """
Long description of module's purpose
    """,

    'author': "IB Teguh TM",
    'website': "https://www.teguhteja.id",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Point of Sale',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale',],

    # always loaded
    # 'data': [
    #     # 'security/ir.model.access.csv',
    #     'views/views.xml',
    #     'views/templates.xml',
    # ],
    "assets": {
        "point_of_sale._assets_pos": [
            "ttm_pos_auto_send_email/static/src/js/ReceiptScreen.js",
        ],
    },
    # only loaded in demonstration mode
    # 'demo': [
    #     'demo/demo.xml',
    # ],
}

