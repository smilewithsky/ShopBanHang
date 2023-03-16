const check = (typeInput , itemInfoElement , errorElement) => {
    const lengthInput = itemInfoElement.value.trim();
    console.log("lengthInput ",lengthInput);

    switch (typeInput) {
        case "Name": {
            if (itemInfoElement.value.length < 4) {
                errorElement.innerHTML = "Địa Chỉ Vui Lòng Nhập Lớn hơn 3 Ký Tự";
            }
            else {
                errorElement.innerHTML = "";
            } break
        }
        case "Email": {
            if (itemInfoElement.value.length < 7) {
                errorElement.innerHTML = "Email Vui Lòng Nhập Lớn hơn 6 Ký Tự";
            }
            else {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (itemInfoElement.value.match(regex)) {
                    errorElement.innerHTML = "";
                }
                else {
                    errorElement.innerHTML = "Bạn vui lòng nhập đúng email";
                }

            }
            break;
        }
        case "Address": {
            if (itemInfoElement.value.length < 9) {
                errorElement.innerHTML = "Địa Chỉ Vui Lòng Nhập Lớn hơn 8 Ký Tự";
            }
            else {
                errorElement.innerHTML = "";
            }
            break;
        }
        case "Phone": {
            if (itemInfoElement.value.length >= 9 && itemInfoElement.value.length <= 10) {
                console.log("itemInfoElement.value.charAt(0)", itemInfoElement.value.charAt(0));
                if (itemInfoElement.value.charAt(0) !== '0') {
                    errorElement.innerHTML = "Số đầu tiên phải là 0";
                }
                else {
                    errorElement.innerHTML = "";
                }
            }
            else {
                if (itemInfoElement.value.length < 9 || itemInfoElement.value.length > 10) {
                    errorElement.innerHTML = "Bạn vui lòng nhập đủ 9 đến 10 số";
                }
            }
            break
        }

        default:
            errorElement.innerText = ""; break;
    }
}

export default check