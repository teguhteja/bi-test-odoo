# -*- coding: utf-8 -*-
{
    "name": "POS Disabled Discount Price",
    "summary": "Disabled discount price pad in Product Screen",
    "description": """
Long description of module's purpose
    """,
    "author": "IB Teguh TM",
    "website": "https://www.teguhteja.id",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "point_of_sale",
    "version": "0.1",
    # any module necessary for this one to work correctly
    "depends": ["point_of_sale",],
    # always loaded
    "assets": {
        "point_of_sale._assets_pos": [
            "ttm_pos_disabled_price_discount/static/src/js/NumpadWidget.js",
        ],
    },
}
