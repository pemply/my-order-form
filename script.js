const products = [
  { 
    id: 1, 
    name: 'Протеїн Optimum Nutrition Whey', 
    price: 950, 
    category: 'Протеїн', 
    image: 'https://waysport.ua/uploads/2021/09/8566258d00217a96ff9834ee13b6289b.jpg',
    description: 'Високоякісний сироватковий протеїн для швидкого відновлення м\'язів. Містить 24 г білка на порцію.'
  },
  { 
    id: 2, 
    name: 'Протеїн MyProtein Impact', 
    price: 870, 
    category: 'Протеїн', 
    image: 'https://powerway.com.ua/upload/iblock/2c3/hjqrdf2n583jhb1qvxn6nkfoyjd85i9d.jpg',
    description: 'Чистий сироватковий протеїн з високим вмістом білка (80% на порцію). Ідеальний для набору м\'язової маси.'
  },
  { 
    id: 3, 
    name: 'Креатин Monohydrate OstroVit', 
    price: 460, 
    category: 'Креатин', 
    image: 'https://waysport.ua/uploads/2023/07/44219d7bf23aedd279a3b5be6a72ac01.jpg',
    description: 'Чистий креатин моногідрат для збільшення сили та витривалості. 100% без добавок.'
  },
  { 
    id: 4, 
    name: 'Креатин Creatine Xplode', 
    price: 540, 
    category: 'Креатин', 
    image: 'https://nutrix.ua/image/cache/catalog/tovars/10000000101-1300x1300.jpg',
    description: 'Покращена формула креатину з транспортною системою для кращого засвоєння.'
  },
  { 
    id: 5, 
    name: 'BCAA 2:1:1 Powder', 
    price: 510, 
    category: 'Амінокислоти', 
    image: 'https://bcaa.ua/uploaded/catalog_spool/28982/p28982_Nutrend_BCAA_2_1_1_Powder_400_g_4.jpg',
    description: 'Оптимальне співвідношення амінокислот 2:1:1 для швидкого відновлення після тренувань.'
  },
  { 
    id: 6, 
    name: 'BCAA Scitec Nutrition', 
    price: 620, 
    category: 'Амінокислоти', 
    image: 'https://scitec-nutrition.com.ua/assets/images/bcaa-6400-375-foto.bmp',
    description: 'Преміальні амінокислоти з додаванням вітаміну B6 для кращого засвоєння.'
  },
  { 
    id: 7, 
    name: 'Pre-Workout Booster C4', 
    price: 630, 
    category: 'Бустери', 
    image: 'https://m.media-amazon.com/images/I/81b3rwaC89L.jpg',
    description: 'Енергетичний комплекс для підвищення продуктивності під час тренувань.'
  },
  { 
    id: 8, 
    name: 'Бустер NO-Xplode', 
    price: 690, 
    category: 'Бустери', 
    image: 'https://www.ifit.ee/media/ifit/.product-image/medium/product/Bsn/eu_no-xplode_30_watermelon.jpg',
    description: 'Потужний передтренувальний комплекс для максимальної енергії.'
  },
  { 
    id: 9, 
    name: 'L-Carnitine BioTech USA', 
    price: 420, 
    category: 'Жироспалювачі', 
    image: 'https://powerway.com.ua/upload/iblock/5ba/nqu0du0rwg0dsk549564uc1dmjs6ts22.jpeg',
    description: 'Сприяє активному спалюванню жиру під час фізичних навантажень.'
  },
  { 
    id: 10, 
    name: 'Fat Burner Black Mamba', 
    price: 760, 
    category: 'Жироспалювачі', 
    image: 'https://rukminim3.flixcart.com/image/850/1000/kkvhea80/vitamin-supplement/e/j/c/90-black-mamba-fat-burner-innovative-lab-original-imagy4gzcyepdg4w.jpeg',
    description: 'Інтенсивний жироспалювач для прискорення метаболізму.'
  },
  { 
    id: 11, 
    name: 'Mass Gainer Serious Mass', 
    price: 800, 
    category: 'Гейнери', 
    image: 'https://bodymarket.ua/img/p/4/2/9/6/4296-thickbox_default.jpg',
    description: 'Висококалорійний гейнер для швидкого набору м\'язової маси.'
  },
  { 
    id: 12, 
    name: 'Гейнер Mutant Mass', 
    price: 890, 
    category: 'Гейнери', 
    image: 'https://gymbeam.ua/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/m/u/mutant_mass_2270.jpg',
    description: 'Потужний комплекс для набору ваги з оптимальним балансом білків та вуглеводів.'
  },
  { 
    id: 13, 
    name: 'Гантелі 10 кг', 
    price: 900, 
    category: 'Інвентар', 
    image: 'https://sport-motor.com.ua/image/cache/900-700/data/AAAAA/Dumbbells/10kg-Everlast.jpg',
    description: 'Набір гантелей з неіржавкої сталі, покриття з гумовим компонентом.'
  },
  { 
    id: 14, 
    name: 'Фітнес резинки', 
    price: 300, 
    category: 'Інвентар', 
    image: 'https://cdn.27.ua/sc--media--prod/default/86/18/b5/8618b55e-d6d3-4ef0-9b44-8cf3d99200ee.jpg',
    description: 'Набір 5 резинок з різним рівнем навантаження для тренувань вдома.'
  },
  { 
    id: 15, 
    name: 'Шейкер для коктейлів', 
    price: 150, 
    category: 'Інвентар', 
    image: 'https://weider.com.ua/datacache/3/d/c/f/1/3dcf1bf128983182739323403187a52f22704178.png',
    description: 'Зручний шейкер з мірною шкалою та відділенням для порошку.'
  },
  { 
    id: 16, 
    name: 'Коврик для йоги', 
    price: 450, 
    category: 'Інвентар', 
    image: 'https://content1.rozetka.com.ua/goods/images/big/258887915.jpg',
    description: 'Антиковзкий коврик для йоги та фітнесу, товщина 6 мм.'
  },
  { 
    id: 17, 
    name: 'Комплект "Сила та маса"', 
    price: 1490, 
    category: 'Акційні комплекти', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVV4CumOXDwJWGFRNFj-y-82efrqDg7tUg&s',
    description: 'Набір з протеїну, креатину та гейнера для швидкого набору м\'язової маси.'
  },
  { 
    id: 18, 
    name: 'Комплект "Рельєф та витривалість"', 
    price: 1290, 
    category: 'Акційні комплекти', 
    image: 'https://ukratlet.com/wp-content/uploads/2025/01/Small-PredTren-PDMango-1.png',
    description: 'Комплекс для зниження жирової прослойки та підвищення витривалості.'
  }
];
let cart = [];
let selectedCategory = 'Всі';

function init() {
  displayProducts();
  loadCartFromLocalStorage();
  setupEventListeners();
}

function setupEventListeners() {
  document.getElementById('overlay').addEventListener('click', closeAllModals);
  
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^\d+]/g, '');
      if (!this.value.startsWith('+380')) {
        this.value = '+380';
      }
      if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function closeAllModals() {
  document.getElementById('cart-modal').classList.remove('active');
  document.getElementById('checkout-modal').classList.add('hidden');
  document.getElementById('success-modal').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
}

function closeSuccessModal() {
  document.getElementById('success-modal').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
}

function displayProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  const filtered = selectedCategory === 'Всі' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (filtered.length === 0) {
    list.innerHTML = '<p class="no-products">Товарів у цій категорії не знайдено</p>';
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.price} грн</p>
      <div class="product-tooltip">${product.description}</div>
      <button onclick="addToCart(${product.id})">Додати</button>
    `;
    list.appendChild(div);
  });
}

function filterByCategory(category) {
  selectedCategory = category;
  displayProducts();
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === category);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({...product, quantity: 1});
    }
    updateCart();
    saveCartToLocalStorage();
    showNotification(`${product.name} додано до кошика!`);
  }
}

function updateCart() {
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.getElementById('cart-count').textContent = itemCount;
  
  const list = document.getElementById('cart-items');
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  document.getElementById('total-price').textContent = total.toFixed(2);
  
  list.innerHTML = cart.length === 0 
    ? '<li>Кошик порожній</li>'
    : cart.map((item, index) => `
        <li>
          <span>${item.name} – ${item.price} грн × ${item.quantity || 1}</span>
          <div>
            <button onclick="changeQuantity(${index}, -1)">-</button>
            <span>${item.quantity || 1}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button class="remove" onclick="removeFromCart(${index})">❌</button>
          </div>
        </li>
      `).join('');
  
  document.querySelector('.cart-buttons button:nth-child(2)').disabled = cart.length === 0;
}

async function submitOrder(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  if (!name || !address || !phone) {
    showNotification('Будь ласка, заповніть всі поля', 'error');
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const orderItems = cart.map(item => 
    `${item.name} (${item.quantity} шт.) — ${item.price * item.quantity} грн`
  ).join('\n');

  try {
    // Відправка даних на FormSubmit
    const response = await fetch('https://formsubmit.co/ajax/pemply56@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        order: orderItems,
        total: `${total} грн`,
        _subject: 'Нове замовлення з FitPower!',
        _template: 'table',
        _captcha: 'false'
      })
    });

    if (response.ok) {
      showSuccessMessage(name, total);
      cart = [];
      updateCart();
      saveCartToLocalStorage();
      form.reset();
      closeAllModals();
    } else {
      throw new Error('Помилка відправки');
    }
  } catch (error) {
    console.error('Помилка:', error);
    showNotification('Помилка при відправці замовлення. Спробуйте ще раз.', 'error');
  }
}

function showSuccessMessage(name, total) {
  document.getElementById('success-message').innerHTML = `
    <p>Дякуємо, ${name}!</p>
    <p>Ваше замовлення на суму <strong>${total} грн</strong> прийнято.</p>
    <p>Ми зв'яжемося з вами для підтвердження.</p>
  `;
  document.getElementById('success-modal').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.toggle('hidden');
  document.getElementById('overlay').classList.toggle('hidden');
  setTimeout(() => cartModal.classList.toggle('active'), 10);
}

function checkout() {
  document.getElementById('cart-modal').classList.remove('active');
  setTimeout(() => {
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.remove('hidden');
  }, 300);
}

function cancelCheckout() {
  closeAllModals();
}

function changeQuantity(index, delta) {
  const item = cart[index];
  item.quantity = (item.quantity || 1) + delta;
  if (item.quantity < 1) cart.splice(index, 1);
  updateCart();
  saveCartToLocalStorage();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  saveCartToLocalStorage();
}

function clearCart() {
  cart = [];
  updateCart();
  saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
  localStorage.setItem('fitpower_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('fitpower_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCart();
    } catch (e) {
      console.error('Помилка завантаження кошика', e);
      localStorage.removeItem('fitpower_cart');
    }
  }
}

document.addEventListener('DOMContentLoaded', init);