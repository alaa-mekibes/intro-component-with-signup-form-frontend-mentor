class InputVerfication {
    constructor() {
        this.userFN = document.querySelector(".user-fn input");
        this.userLN = document.querySelector(".user-ln input");
        this.userEA = document.querySelector(".user-ea input");
        this.userPass = document.querySelector(".user-pass input");
        this.form = document.querySelector(".form_container");
        this.verification();
    }
    displayError(field) {
        const parent = field.parentElement;
        if(!parent.nextElementSibling.classList.contains("error-msg")) {
        parent.classList.add("input-error");

        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-msg");
        errorSpan.setAttribute("role", "alert");
        errorSpan.id = `${field.name}-error`;
        switch (field.name) {
            case "first-name": errorSpan.textContent = "First Name cannot be empty"; break;
            case "last-name": errorSpan.textContent = "Last Name cannot be empty"; break;
            case "email-address": errorSpan.textContent = "Looks like this is not an email"; field.placeholder = "email@example\/com"; break;
            case "password": errorSpan.textContent = "Password cannot be empty"; break;
        }
        parent.after(errorSpan);

        field.setAttribute("aria-decribedby", errorSpan.id);
        field.setAttribute("aria-invalid", "true");
        }
    }
    init(field) {
        const parent = field.parentElement;
        parent.classList.remove("input-error");
        if(parent.nextElementSibling.classList.contains("error-msg")) parent.nextElementSibling.remove();
        field.removeAttribute("aria-decribedby");
        field.setAttribute("aria-invalid", "false");
    }
    verification() {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                const fields = [this.userFN, this.userLN, this.userPass];
                let isValid = true;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!this.userEA.value.trim() || !emailPattern.test(this.userEA.value.trim())) {this.displayError(this.userEA); isValid = false;} else this.init(this.userEA);
                fields.forEach(inp => {
                    if(!inp.value.trim()) {this.displayError(inp); isValid = false;} else this.init(inp);
                })

                console.log(isValid)

                if(isValid)  this.form.submit();
            })
        }
}

// main
input = new InputVerfication;