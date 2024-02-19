const btnSeats = document.getElementsByClassName('btn-seat');
let count = 0;
let price = 0;

for (let seatElement of btnSeats) {
    let button = seatElement.addEventListener('click', function handleEvent(event) {
        count += 1;
        if (count > 4) {
            return alert('4 tar basi kinte parben na')
        }
        const deleteAttribute = document.getElementById("copupon-input");
        if (count === 4) {
            deleteAttribute.removeAttribute('disabled')
        }
        else {
            deleteAttribute.setAttribute('disabled', true)
        }
        const deleteAttributeNextBtn = document.getElementById("next-btn");
        if (count >= 1){
            deleteAttributeNextBtn.removeAttribute('disabled')
        }
        else {
            deleteAttributeNextBtn.setAttribute('disabled', true)
        }
        const seatCatagory = event.target.innerText
        const selectedSeatContainer = document.getElementById('selected-seat-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatCatagory;
        const p1 = document.createElement('p');
        p1.innerText = 'Economoy';
        const p2 = document.createElement('p');
        p2.innerText = '550';
        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        selectedSeatContainer.appendChild(li);
        price = price + 550;
        setValueById('total-price', price);
        setValueById('grand-total', price);
        event.target.setAttribute('disabled', true);
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';

        setValueById('seat-count', count);
        const leftSeatTxt = document.getElementById('left-seat').innerText;
        const leftSeat = parseFloat(leftSeatTxt);
        const leftSeatCount = leftSeat - 1;
        setValueById('left-seat', leftSeatCount);
    })
}
function setValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

document.getElementById('number-fild').addEventListener('keyup',function(event){
    const numberFildValue = event.target.value;
})

function discountUpdateGrandTotal(event) {
    const copuponInput = document.getElementById('copupon-input').value;
    if (copuponInput === 'NEW15' || copuponInput === 'Couple 20') {
        const couponFild = document.getElementById('coupon-fild');
        couponFild.classList.add('hidden')
        const dicountContent = document.getElementById('dicount-content');
        dicountContent.classList.remove('hidden')
        if (copuponInput === 'NEW15') {
            let discount = price * 0.15;
            setValueById('dicount-price', discount);
            let afterDiscountGrandTotal = price - discount;
            setValueById('grand-total', afterDiscountGrandTotal)
        }
        else if (copuponInput === 'Couple 20') {
            let discount = price * 0.2;
            setValueById('dicount-price', discount);
            let afterDiscountGrandTotal = price - discount;
            setValueById('grand-total', afterDiscountGrandTotal)
        }

    }
    else{
        return alert('Invalid Coupon Code')
    }
}