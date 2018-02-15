module.exports = {
    //Error message types
    errors: {
        errorMessage: 'p[name="errorMessage"]',
        addOneErrorMessage: 'li[name="addOneErrorMessage"]',
        addTwoErrorMessage: 'li[name="addTwoErrorMessage"]',
        addThreeErrorMessage: 'li[name="addThreeErrorMessage"]',
        doublePriceError: 'div[class="vert-align"]'
    },
    //These are the nonchanging titles on each page
    pageHeaders: {
        homeHeader: 'h1[name="promptText"]',
        promptTextOne: 'p[name="promptText1"]',
        promptTextTwo: 'p[name="promptText2"]',
        promptText: 'p[name="promptText"]',
    },
    
    //These are dropdown selections
    dropDown: {
        loanDropDown: 'select[id="loanTypes"]',
        propertyDropDown: 'select[id="propertyTypes"]',
        purchase: 'option[value="Home Purchase"]',
        refinance: 'option[value="Refinance"]',
        equity: 'option[value="Home Equity"]',
        singleFamily: 'option[value="Single Family Home"]',
        townHome: 'option[value="Town Home"]',
        condo: 'option[value="Condo"]',
        multiFamily: 'option[value="Multi Family Dwelling"]',
        mobileHome: 'option[value="Mobile Home"]',
    },

    //These are fields that allow free form text/numbers
    fields: {
        cityInput: 'input[name="city"]',
        priceInput: 'input[name="price"]',
        downInput: 'input[name="down"]',
        addressOne: 'input[id="addressOne"]',
        addressTwo: 'input[id="addressTwo"]',
        addressThree: 'input[id="addressThree"]',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',
    },

    //These are the different buttons that you can click
    buttons: {
        homeBtn: 'button[class="home-btn"]',
        nextBtn: 'button[name="nextButton"]',
        primaryBtn: 'button[value="Primary Home"]',
        rentalBtn: 'button[value="Rental Property"]',
        secondaryBtn: 'button[value="Secondary Home"]',
        yesBtn: 'button[name="yesButton"]',
        noBtn: 'button[name="noButton"]',
        excellentBtn: 'button[value="Excellent"]',
        goodBtn: 'button[value="Good"]',
        fairBtn: 'button[value="Fair"]',
        poorBtn: 'button[value="Poor"]',
        noBankruptcyBtn: 'button[value="Has not been in bankruptcy or foreclosure"]',
        bankruptcyBtn: 'button[value="Has had bankruptcy"]',
        foreclosureBtn: 'button[value="Has had a foreclosure"]',
        bothBtn: 'button[value="Has had both a foreclosure and a bankruptcy"]',
        sendBtn: 'button[name="sendButton"]',
        restartBtn: 'button[name="restartButton"]',
    },

    //These are the fields in the summary page
    summary: {
        name: 'p[class="name p2"]',
        email: 'p[class="email p2"]',
        loanType:'p[class="loanType p2"]',
        propertyType: 'p[class="propertyType p2"]',
        propertyLocation:'p[class="city p2"]',
        purchaseReason:'p[class="propertyPurpose p2"]',
        propertyAlreadyLocated:'p[class="found p2"]',
        agentAlreadyEngaged:'p[class="agent p2"]',
        price:'p[class="price p2"]',
        downPayment:'p[class="downPayment p2"]',
        creditScore:'p[class="creditScore p2"]',
        creditHistory:'p[class="creditHistory p2"]',
        address1:'span[id="addressOne"]',
        address2: 'span[id="addressTwo"]',
        address3: 'span[id="addressThree"]',
    }
}