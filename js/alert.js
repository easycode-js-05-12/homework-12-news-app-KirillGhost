const formCont = document.querySelector('.form-wrap');

class Alert {
    /**
     * @desc Creates alert message
     * @param {string} className - Error class name
     * @param {string} message - Message text
     */
    alertMessage(className, message) {
        this.removeAlert();

        const template = this.alertTemplate(className, message);
        formCont.insertAdjacentHTML('beforeend', template);

        setTimeout(this.removeAlert, 2000);
    }

    /** 
     * @desc Removes alert message
     */    
    removeAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) formCont.removeChild(currentAlert);
    }

    /** 
     * @desc Markup template for alerts
     * @returns {string} Alert markup
     */        
    alertTemplate(className, message) {
        return `
        <div class="alert ${className}">${message}</div>
        `;
    }
}