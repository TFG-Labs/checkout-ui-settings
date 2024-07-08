# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.66] - 2024-07-08

## [0.1.65] - 2024-05-30

## [0.1.64] - 2024-05-16

## [0.1.63] - 2024-03-08

## [0.1.62] - 2024-03-08

## [0.1.61] - 2024-03-08

## [0.1.60] - 2024-02-20

## [0.1.59] - 2024-02-20

## [0.1.58] - 2024-02-05

## [0.1.57] - 2024-02-05

## [0.1.56] - 2024-02-01

## [0.1.55] - 2024-01-29

## [0.1.54] - 2024-01-29

## [0.1.53] - 2023-11-22

## [0.1.52] - 2023-11-02

## [0.1.51] - 2023-11-02

## [0.1.50] - 2023-11-02

## [0.1.49] - 2023-11-02

## [0.1.48] - 2023-10-12

## [0.1.47] - 2023-09-11

## [0.1.46] - 2023-09-11

## [0.1.45] - 2023-07-05

## [0.1.44] - 2023-07-05

## [0.1.43] - 2023-06-23

## [0.1.42] - 2023-06-22

## [0.1.41] - 2023-05-31

## [0.1.40] - 2023-05-18

## [0.1.39] - 2023-04-18

## [0.1.38] - 2023-04-04

## [0.1.37] - 2023-03-22

## [0.1.36] - 2023-03-13

## [0.1.35] - 2023-03-09

## [0.1.34] - 2023-03-08

## [0.1.33] - 2023-02-21

## [0.1.32] - 2023-02-21

## [0.1.31] - 2023-02-20

## [0.1.30] - 2023-02-14

## [0.1.29] - 2023-02-10

## [0.1.28] - 2023-01-24

## [0.1.27] - 2023-01-24

## [0.1.26] - 2023-01-23

## [0.1.25] - 2023-01-19

## [0.1.24] - 2023-01-13

## [0.1.23] - 2023-01-12

## [0.1.22] - 2023-01-10

## [0.1.21] - 2022-09-21

## [0.1.20] - 2022-09-08

## [0.1.19] - 2022-08-22

## [0.1.18] - 2022-08-22

## [0.1.14] - 2022-08-22

## [0.1.13] - 2022-07-28

### Fixed

- Validation issue for mobile number

## [0.1.12] - 2022-07-22

### Changed

- Include furniture, tv license and rica fields on the Order Form
- update README

## [0.1.11] - 2022-07-13

### Fixed

- check `intl-tel-input` dependencies

## [0.1.10] - 2022-07-07

### Fixed

- remove container address

## [0.1.9] - 2022-07-07

### Added

- new field addressType in checkout

## [0.1.8] - 2022-07-06

### Changed

- rename CTA `Continue to shipping` to `Save address`

## [0.1.7] - 2022-06-17

### Added

- add `Content-type` header

## [0.1.6] - 2022-06-16

### Changed

- update `fetch` calls

## [0.1.5] - 2022-06-03

### Fixed

- The receiver control in payment has been removed because I do not have the possibility to control that,
  once I send the user to shipping, to show the fields to fill in the missing data.

## [0.1.4] - 2022-06-03

### Fixed

- fixed problem with field saving
- design changed to more securely control receiver and complement field
- fixed bugs with native behaviour

## [0.1.3] - 2022-05-31

### Added

- added receiver, complement on collect step
- remove styles (there are in tfg-custom-checkout)

## [0.1.2] - 2022-XX-XX

### Added

- Message when address is saved
- Hide subheader on furniture case
- Icons on custom messages

### Changed

- New CI: moved styles to "tfg-custom-checkout" repository
- Validation fields

### Fixed

- Fixed bug saving custom fields in Masterdata (receiver, complement, neighborhood, company/building)
- Not continue to payment when mandatory fields are empty and redirect to form
- Error on lift or stairs label

## [0.1.2] - 2022-XX-XX

### Added

- added receiver, complement and suburb with validation and save
- added google autocomplete view
- added complement with intl-tel-input

## [0.1.0] - 2022-XX-XX

### Changed

- Updated readme.md

### Added

- Initial version of the project created.
- Functionality associated with TV licence
- Functionality associated with RICA
- Functionality associated with Furniture products
- Functionality associated with Mixed products

### Fixed

- Fixed issues after test all the cases
