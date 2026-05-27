# React JS Landing Page Template

**

# 🛎️🛎️ Good news! New & improved [V2](https://github.com/issaafalkattan/react-landing-page-template-2021) is out  

**


### <a href="https://react-landing-page-template-93ne.vercel.app/">LIVE DEMO</a> 

## Description
This is a ReactJS based landing page template, fit for a startup company/service with a one page view. The design is inspired by a template from <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>
All 'visual' data can be easily modified by changing the data.json file.

## Make it Yours!
### 1. Preps
You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc. 

### 2. Clone Files
After cloning the files, you will have to run ```yarn``` followed by ```yarn start``` in the CLI
### 3. Add your own data 
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.
If you need the contact form to work, you also need to create an EmailJS account, and modify the ```src/components/contact.jsx``` file to replace your own service ID, template ID and Public Key

### Subscription API
The homepage subscribe form posts to `/api/subscribe`, backed by the Azure Function in `api/subscribe`. The function validates requests server-side, checks allowed origins, uses a honeypot field, rate-limits hashed IP/email attempts in Azure Table Storage, and stores subscriber emails in Azure Table Storage without exposing storage secrets to the browser.

For Azure Static Web Apps, the workflow uses `api_location: "api"`. Deploy the runtime settings and Azure Table Storage backing store with the ARM template in `infra/subscribe-settings.arm.json` from the resource group that contains the Static Web App:

```sh
az deployment group create \
  --resource-group <resource-group-name> \
  --template-file infra/subscribe-settings.arm.json \
  --parameters staticWebAppName=<static-web-app-name> \
               allowedOrigins='https://photobook-noir.com,https://www.photobook-noir.com' \
               subscribeHashSecret='<generate-with-openssl-rand-hex-32>' \
               turnstileSecret=''
```

The template creates or updates a secure storage account, creates the `NewsletterSubscribers` and `NewsletterRateLimits` tables, derives `SUBSCRIBE_STORAGE_CONNECTION_STRING` with ARM `listKeys`, and writes these Static Web Apps API settings. If the generated storage account name collides globally, pass a unique `storageAccountName` parameter.

- `SUBSCRIBE_STORAGE_CONNECTION_STRING`
- `SUBSCRIBE_HASH_SECRET`
- `SUBSCRIBE_ALLOWED_ORIGINS`
- `SUBSCRIBE_TURNSTILE_SECRET`
- `SUBSCRIBE_TABLE_NAME`
- `SUBSCRIBE_RATE_LIMIT_TABLE_NAME`
- `SUBSCRIBE_MAX_IP_ATTEMPTS_PER_HOUR`
- `SUBSCRIBE_MAX_EMAIL_ATTEMPTS_PER_DAY`

If you enable Turnstile, set `turnstileSecret` in the ARM deployment and set the public `REACT_APP_TURNSTILE_SITE_KEY` as a GitHub Actions repository variable. The workflow passes that public value into the React build.

## Like this project?
<a href="https://www.buymeacoffee.com/issaaf">Buy my a coffee ☕️</a>

## Credits
##### Free CSS 
<a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>

##### Issaaf kattan
