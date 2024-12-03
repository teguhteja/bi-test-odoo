# bi-test-odoo
Challenge from Bintang Internasional Odoo 17

## Table of Contents

- [bi-test-odoo](#bi-test-odoo)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
    - [Description of Folders](#description-of-folders)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

**bi-test-odoo** is a project developed as part of the challenge from Bintang Internasional for Odoo 17. This project showcases customized Point of Sale (POS) functionalities, enhancing the user experience and operational efficiency within the Odoo ecosystem.

## Features

- **Disable Discount Price in Product Screen :** Disable numpad methods in Product Screen.
- **Dynamic Number Payment:** Improved number input handling in Payment screen .
- **Send Auto Email:** Send Email automatic in Receipt Screen.

## Installation

Follow the steps below to install and set up the **bi-test-odoo** project:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/teguhteja/bi-test-odoo.git

   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd bi-test-odoo
   ```

3. **Install Dependencies:**

No Install Dependecies

4. **Configure Odoo:**

   - Copy the configuration file if necessary.
   - Update the `addons_path` in the Odoo configuration to include the **bi-test-odoo** module.

5. **Restart Odoo Server:**

   ```bash
   sudo service odoo restart
   ```

6. **Update Apps List:**

   - Log in to your Odoo instance.
   - Navigate to **Apps**.
   - Click on **Update Apps List**.

7. **Install the Module:**

   - Search for **ttm_** in the Apps.
   - Click **Install**.

## Usage

After installation, the **bi-test-odoo** module enhances the POS interface with custom payment functionalities. To use the features:

1. **Access the POS Module:**
   - Navigate to **Point of Sale** from the Odoo dashboard.

2. **Initiate a Transaction:**
   - Add products to the cart as usual.

3. **Customize Payment:**
   - Use the enhanced payment methods and input keys for faster checkout.

4. **Review Transactions:**
   - Access detailed transaction logs and reports for better financial tracking.

## Folder Structure

The **bi-test-odoo** project is organized as follows:

```
bi-test-odoo/
├── LICENSE
├── README.md
├── ttm_pos_auto_send_email
│   ├── __init__.py
│   ├── __manifest__.py
│   ├── __pycache__
│   │   └── __init__.cpython-310.pyc
│   └── static
│       └── src
│           └── js
│               └── ReceiptScreen.js
├── ttm_pos_chg_paymentnum
│   ├── __init__.py
│   ├── __manifest__.py
│   ├── __pycache__
│   │   └── __init__.cpython-310.pyc
│   └── static
│       └── src
│           └── js
│               └── NumpadWidget.js
└── ttm_pos_disabled_price_discount
    ├── __init__.py
    ├── __manifest__.py
    ├── __pycache__
    │   └── __init__.cpython-310.pyc
    └── static
        └── src
            └── js
                └── NumpadWidget.js

README.md


```

### Description of Folders


- **`static/`**
  - Houses static assets such as JavaScript, CSS, and XML files.
  - **`src/js/`**
    - **`NumpadWidget.js`**: Custom JavaScript for the POS numpad widget, enhancing input handling.
    - **`ReceiptScreen.js`**: Service handling the  logic for Send Email

- **`README.md`**
  - Project documentation and setup instructions.

- **`__init__.py` & `__manifest__.py`**
  - Python initialization files and module manifest defining metadata and dependencies.

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. **Fork the Repository:**
   - Click the **Fork** button at the top right of the repository page.

2. **Create a Feature Branch:**
   - Navigate to your forked repository.
   - Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes:**
   - Make your changes and commit them with clear messages.

   ```bash
   git commit -m "Add feature X"
   ```

4. **Push to Your Fork:**
   - Push the changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request:**
   - Navigate to the original repository.
   - Click **New Pull Request** and submit your changes for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact:

- **Name:** IB Teguh TM
- **Email:** teguh.teja@gmail.com
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/ib-teguh-tm-1729101066)
```