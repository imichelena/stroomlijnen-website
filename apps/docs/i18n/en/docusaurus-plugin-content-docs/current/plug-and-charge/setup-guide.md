---
sidebar_position: 4
title: Setting up automatic recognition
description: Enrol a vehicle on the charger screen with an account-linked card, capture its EVCCID and obtain separate approval.
keywords: [setting up automatic recognition, EVCCID, registering a vehicle, linking]
---

# Setting up automatic recognition

At supported DC chargers, Stroomlijnen uses **EVCCID: the MAC address of the vehicle communication controller**. The charger reads it when the vehicle is connected. Entering a VIN or registration number in the portal does not activate this recognition. This is not authentication using ISO 15118 contract certificates.

## Preparation

Use a charger that offers vehicle enrolment and bring a **card linked to your account**. Have the registration number and, for a rental, the end date ready. Leave the charging cable disconnected: connect only when the screen asks you to.

:::note Screen versions
Screen labels and available steps may differ by software version and configuration. Follow the screen on your charger.
:::

## Enrolment on the charger screen

1. In the menu, choose **“Do you want to add a new vehicle to your account?”**. On the **“Add a vehicle”** welcome screen, choose **“Begin”**.
2. Press **“Hold your card to the reader”** to activate the card reader. **Then hold your card to the reader.** Simply opening this screen does not activate it. Once a known card is recognised, enrolment continues. If the card is unknown, use one linked to your account. After **“Try again”**, press the card-reader button again to activate it.
3. If **“Is this a rental vehicle?”** appears, choose **“Yes”** or **“No”**. For Yes, set the end date under **“Until when?”** using the day, month and year buttons. Choose **“Continue”**. This step depends on the configuration.
4. If **“Enter the license plate”** appears, enter the registration number and choose **“Look up plate”**. At **“Is this the correct vehicle?”**, check the make, model and colour. Choose **“Confirm”** if correct, or **“Change”** to correct the registration number. Without an RDW result, you can select **“Continue”**; the vehicle will be recorded without RDW confirmation. This step also depends on the configuration.
5. Connect the vehicle **only at “Connect your vehicle now.”** The charger waits for the EVCCID and automatically records the details after receiving it. There is no separate consent checkbox or final agreement button in this enrolment flow.
6. Read the result. **“Done!”** with **“Your vehicle has been added to your account.”** confirms recording. The screen may also say the vehicle was already registered. A confirmation email is reported as sent only if it was sent; an email failure may mean the vehicle **was still recorded**. At **“Not completed”**, enrolment has not been confirmed successful: follow the message and use **“Try again”** or **“Back to menu”** as needed.

## Two time limits

From **Begin**, the entire enrolment has **5 minutes**, including reading the card and entering details. A warning appears in the final minute. Capturing the identity after connecting can take **up to 3 minutes**, but only within the remaining overall time: these are not three extra minutes. Start again if time expires. This is not the timer for starting a normal charging session.

**Back** or the home button on earlier steps aborts the attempt; it does not take you back through completed steps.

## Recorded does not mean approved

The account owner must approve the vehicle separately. Successful enrolment or a confirmation email is **not proof that automatic charging is already permitted**. The charger may indicate that approval is awaited, denied or expired. Ask the account owner to check this through the [Customer Portal](https://portal.stroomlijnen.nl); ask your account manager for help if the management options are unclear.

After approval, you can check whether recognition and authorisation succeed at a suitable charger. Starting still depends on vehicle communication, valid permission and the site's charging conditions. Follow the display; use only an offered and authorised card or QR option as an alternative.

## Further reading

- [What is Plug & Charge?](/en/docs/plug-and-charge/what-is-pnc)
- [Compatibility](/en/docs/plug-and-charge/compatible-vehicles)
- [Troubleshooting](/en/docs/plug-and-charge/troubleshooting)
