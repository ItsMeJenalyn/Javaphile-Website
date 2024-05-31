
function showKapeAlamid() {
    hideIntroduction();
    const content = `
       <div class="coffee-details">
            <img src="images/alamid.png" alt="Barako Coffee" class="coffee-image">
            <div class="coffee-text">
            <h2>Kape Alamid</h2>
            <p>Kape Alamid, also known as Civet Coffee, is one of the most expensive and rarest coffees in the world. It is made from beans that have been eaten and excreted by the civet cat, resulting in a smooth and rich flavor.</p>
            <p>Origin: Various regions in the Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

function showBenguet() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/benguet.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
            <h2>Benguet Coffee</h2>
            <p>Benguet coffee is known for its mild and fruity flavor profile with floral notes. Grown in the highlands of Benguet, this Arabica coffee is a favorite among those who prefer a lighter and more nuanced coffee experience.</p>
            <p>Origin: Benguet Province, Cordillera Administrative Region, Philippines</p>
        </div>

    `;
    document.getElementById('coffee-details').innerHTML = content;

}

function showSagada() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/sagada.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Sagada Coffee</h2>
            <p>Sagada coffee is another highland Arabica coffee known for its sweet and nutty flavor with a hint of chocolate. It is highly prized for its smooth and balanced flavor, making it a favorite among coffee enthusiasts.<br></p>
            <p>Origin: Sagada, Mountain Province, Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

function showSulu() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/sulu.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Sulu Coffee</h2>
            <p>Sulu coffee is known for its strong and robust flavor, often with a slightly bitter taste. It is grown in the Sulu Archipelago and is popular among those who prefer a more intense coffee experience.</p>
            <p>Origin: Sulu Archipelago, Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

function showKapengBarako() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/barako.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Kapeng Barako</h2>
            <p>Kapeng Barako is a strong, bold coffee with a distinctive aroma. It is commonly grown in the Batangas region of the Philippines.</p>
            <p>Origin: Batangas, Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}


function showKapengTagalog() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/tagalog.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Kapeng Tagalog</h2>
            <p>Kapeng Tagalog is a traditional Filipino coffee made using the 'sock' method, where coffee grounds are steeped in hot water and filtered through a cloth. It has a rich and full-bodied flavor.</p>
            <p>Origin: Tagalog-speaking regions in the Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

function showExcelsa() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/excelsa.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Excelsa Coffee</h2>
            <p>Excelsa coffee is known for its unique tart and fruity flavor profile, often with hints of dark chocolate. It is typically grown in the Southern regions of the Philippines and is a lesser-known but highly prized coffee variety.</p>
            <p>Origin: Southern Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

function showLiberica() {
    hideIntroduction();
    const content = `
    <div class="coffee-details">
         <img src="images/liberica.png" alt="Barako Coffee" class="coffee-image">
         <div class="coffee-text">
         <h2>Liberica Coffee</h2>
            <p>Liberica coffee is known for its bold, smoky flavor with a full-bodied taste. It is a rare type of coffee that is often enjoyed by those who appreciate a strong and intense coffee experience.</p>
            <p>Origin: Various regions in the Philippines</p>
        </div>
    `;
    document.getElementById('coffee-details').innerHTML = content;
}

// Add more functions for other types of Filipino coffee as needed.

// Add other show functions for different types of Filipino coffee

function hideIntroduction() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('introduction-title').style.display = 'none';
}

