<h1 align="center">National Highway & Motorway Police - Inventory Management System</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

## Overview

Inventory Chokidar is a Inventory Management System software that will keep track of
the inventory of National Highway and Motorway Police Department. Web Application
Development knowledge is used in developing this project. Moreover, database
knowledge is also required to save and update the entries. Inventory Chokidar focuses on making the software able to perform
all activities by carefully interacting with the user and fulfilling the requirements specified by
the client.

## Functionalities

- Keep track of inventory items.
- Inventory items have to be related to National Highway Motorway Police (NHMP).
- There are 2 types of items that are issued, returnable and non-returnable. Returnable
items include belt, uniform and other gadgets.
- Each returnable item has an expiry/due date for which item should be returned back.
- System should be able to notify the borrower through email when the due date is close.
- If borrower does not return item within due date, then apply fines/penalties and notify
borrower through email.
- Some items need permission to be issued. Approval is required by higher authorities
for these items.
- There should be a threshold for each item. Whenever that threshold is reached by an
item, a notification should be sent to officer for new supply.
- Concerning officers can request the information/record/documentation of inventory to
verify the shortage of items that are below threshold. The documentation is manually
sent to officer upon request.
- Automated notification system (through EMAIL).
- A forecasting system, that can accurately estimate the amount of supplies needed for a
period of time (to prevent shortage).
- Transportation of inventory items.

## Use Case Diagram

A use case diagram is a graphical depiction of a user's possible interactions with a system. A use case diagram shows various use cases and different types of users the system has and will often be accompanied by other types of diagrams as well. In this project, the two main actors are the Inventory manager and Supervisor.

<p align="center">
  <img width="455" alt="a" src="https://user-images.githubusercontent.com/54681019/120927503-7317df00-c6fa-11eb-8afd-9ab3cb2080b4.PNG">
</p>

## Functional Decopmosition

Functional decomposition corresponds to the various functional relationships as how the original complex business function was developed. It mainly focusses on how the overall functionality is developed and its interaction between various components.

<p align="center">
  <img width="430" alt="a" src="https://user-images.githubusercontent.com/54681019/120927645-018c6080-c6fb-11eb-894e-77d607b5171f.PNG">
</p>

### 🏠 Homepage Screenshot 
<p align="center">
  <img width="700" alt="a" src="https://github.com/asadbinkhalid/Inventory-Chokidar/blob/main/Homepage.jpeg">
</p>

### ✨ [Demo](https://radiant-depths-70569.herokuapp.com/)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

> ## Authors
> 👤 **Faizan Atif**
> * Github: [@faizan387](https://github.com/faizan387)
> 
> 👤 **Asad Bin Khalid**
> * Github: [@asadbinkhalid](https://github.com/asadbinkhalid)
> 
> 👤 **Khawaja Ahmad Hassan**
> * Github: [@ikhawaja-hassan](https://github.com/ikhawaja-hassan)
