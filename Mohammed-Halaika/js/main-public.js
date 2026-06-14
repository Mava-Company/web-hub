const publicCakesContainer =
  document.getElementById("publicCakesContainer");

function loadPublicCakes() {

  db.collection("cakes")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {

      publicCakesContainer.innerHTML = "";

      snapshot.forEach(doc => {

        const cake = doc.data();
        const id = doc.id;

        const card = document.createElement("div");
        card.classList.add("cake-card");

        card.innerHTML = `
          <img src="${cake.image}" />
          <h3>${cake.name}</h3>
          <p>${cake.description}</p>
          <p>💰 ${cake.price} $</p>
          <p>📂 ${cake.category}</p>

          <button class="order-btn">طلب الكيكة</button>
        `;

        // زر الطلب → ينقل لصفحة الطلب مع id الكيكة
        card.querySelector(".order-btn")
          .addEventListener("click", () => {
            window.location.href = `order.html?cakeId=${id}`;
          });

        publicCakesContainer.appendChild(card);
      });

    });

}

loadPublicCakes();