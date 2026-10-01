// ============================================================
// SEED CATALOG — Nicky's Philadelphia Cheesesteaks (Miami, FL)
// 34 NW 29th St, Miami · Open 7 days · 11am–10pm
// IG: @nickysphillysteaks
// Real DoorDash menu mirrored (sep-2026): the Cheesesteak Combo
// $21.24 + drinks & snacks at DoorDash prices. Currency: USD.
// Payments: Cash / Zelle (pending-payment). Pickup + delivery.
// Customer interface: 100% English.
// Photos: Portal's AI creative direction (sep-29-2026) — promo
// poster, combo builder graphic, food shots + detail crops for
// every drink & chip item. Logo cropped from official IG.
// CATALOG_VERSION: bump to re-seed (merge, never wipe).
// Demo #19 — built by Portal's direct order, Sep 29 2026.
// ============================================================

const CATALOG_VERSION = 4;

const SEED_CATALOG = {
  departments: [
    {
      id: "combos",
      name: "Cheesesteak Combos",
      icon: "🔔",
      iconImg: "promo-direct.jpg",
      categories: [
        {
          id: "build-your-own",
          name: "Build your own",
          items: [
            { id: "cheesesteak-combo", name: "The Cheesesteak Combo", price: 21.24, unit: "combo", active: true, image: "combo-photo.jpg",
              tag: "⭐ Customer favorite",
              desc: "Our legendary Philly cheesesteak + crispy chips + an ice-cold drink. 👇 BUILD IT YOUR WAY — tap your cheese, chips, drink and toppings below. One flat price: $21.24, however you build it." }
          ]
        }
      ]
    },
    {
      id: "drinks-snacks",
      name: "Drinks & Snacks",
      icon: "🥤",
      iconImg: "combo-photo.jpg",
      categories: [
        {
          id: "drinks",
          name: "Drinks",
          items: [
            { id: "pepsi", name: "Pepsi", price: 2.36, unit: "can", active: true, image: "drink-pepsi.jpg",
              desc: "Ice-cold Pepsi." },
            { id: "crush-orange", name: "Crush Orange", price: 2.36, unit: "can", active: true, image: "drink-crush.jpg",
              desc: "Ice-cold Crush Orange." },
            { id: "fiji-water", name: "Fiji Water", price: 3.24, unit: "bottle", active: true, image: "drink-fiji.jpg",
              desc: "Chilled Fiji natural artesian water." }
          ]
        },
        {
          id: "snacks",
          name: "Snacks",
          items: [
            { id: "chips-plain", name: "Plain Chips", price: 1.48, unit: "bag", active: true, image: "chips-plain.jpg",
              desc: "Classic crispy potato chips." },
            { id: "chips-bbq", name: "BBQ Chips", price: 1.48, unit: "bag", active: true, image: "chips-bbq.jpg",
              desc: "Smoky BBQ potato chips." }
          ]
        }
      ]
    },
    {
      id: "sandwiches-sides",
      name: "Sandwiches & Sides",
      icon: "🥪",
      iconImg: "hero-cheesesteak.jpg",
      categories: [
        {
          id: "sandwiches",
          name: "Sandwiches",
          items: [
            { id: "philly-sandwich", name: "The Philly Cheesesteak", price: 17.99, unit: "sandwich", active: true, image: "hero-cheesesteak.jpg",
              tag: "👥 Group favorite",
              desc: "The legendary Philly, solo — juicy steak, melted cheese, fresh-baked roll. 👇 BUILD IT YOUR WAY — tap your cheese and toppings below. One flat price: $17.99, however you build it." }
          ]
        },
        {
          id: "sides",
          name: "Sides",
          items: [
            { id: "onion-rings", name: "Fire Onion Rings", price: 5.99, unit: "basket", active: true, image: "side-onion-rings.jpg",
              tag: "🔥 New",
              desc: "Thick-cut, golden and crispy, tossed in fire seasoning — includes Nicky's special sauce for dipping. A full basket of fire. 🔥" }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
