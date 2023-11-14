/////////////////////////////////// 1

var tagList = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var result = {};

for (let i = 0; i < tagList.length; i++) {
    var tag = tagList[i];
    if (result[tag]) {
        result[tag] = result[tag] + 1
    } else {
        result[tag] = 1;
    }
}

console.log(result)

////////////////////////////////// 2

var starbucks = {
    coffee: {
        latte: 'A creamy and smooth coffee made with espresso and steamed milk, topped with a thin layer of frothed milk. Mild and comforting, the latte is perfect for those who enjoy a balanced blend of coffee and milk.',
        mocha: 'Indulge in the rich and decadent combination of espresso, steamed milk, and chocolate. Topped with whipped cream, a mocha is a delightful treat for those with a sweet tooth who want a luxurious coffee experience.',
        cappuccino: 'An Italian classic, the cappuccino is a harmonious mix of equal parts espresso, steamed milk, and frothed milk. Known for its velvety texture and strong coffee flavor, it\'s a favorite among those who appreciate a bold coffee taste.',
        espresso: 'A concentrated shot of pure coffee, espresso is the essence of the coffee experience. It\'s a strong and robust brew, served in small, powerful shots for those who savor the intensity and pure flavor of coffee.',
        americano: 'For a milder coffee experience, the Americano is the choice. It\'s made by diluting a shot of espresso with hot water, resulting in a flavor profile that is closer to traditional drip coffee. A go-to for those who prefer a lighter, yet still full-bodied, cup of coffee.'

    },
    tea: {
        black_tea: 'A robust and fully oxidized tea with a bold flavor profile. Black tea is known for its rich, malty taste and is often enjoyed with or without milk and sweeteners. Perfect for those who appreciate a strong and invigorating cup of tea.',
        green_tea: 'Unoxidized and minimally processed, green tea offers a delicate and fresh flavor with grassy and vegetal notes. It is celebrated for its potential health benefits and is a go-to choice for those seeking a lighter and more nuanced tea experience.',
        matcha_tea: 'A finely ground, powdered green tea with a unique preparation process. Matcha is known for its vibrant green color and distinctive, slightly bitter taste. It is often whisked into a frothy consistency and enjoyed in traditional Japanese tea ceremonies.'
    }
}

var order = prompt("Заказ: ");
order = order.toLowerCase()

if (Object.hasOwn(starbucks.coffee, order) || Object.hasOwn(starbucks.tea, order)) {
    console.log("Ваш заказ принят!")
} else {
    console.error("Такого нет в меню!")
}




