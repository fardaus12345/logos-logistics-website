import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outDir = path.dirname(fileURLToPath(import.meta.url));

const brand = {
  name: "Logos Logistics Distribution",
  phone: "323-761-3057",
  email: "marco@logosdistribution.com",
  address: "1172 E Holt Blvd. Ontario, CA 91761",
};

const navItems = [
  { label: "Home", href: "index.html" },
  { label: "3PL Solutions", href: "3pl-solutions.html" },
  { label: "E-Commerce Fulfillment", href: "e-commerce-fulfillment.html" },
  { label: "Warehousing & Distribution", href: "warehousing-distribution.html" },
  { label: "Inbound & Outbound", href: "inbound-outbound.html" },
  { label: "Cross Docking", href: "cross-docking.html" },
  { label: "Transloading", href: "transloading.html" },
  { label: "Yard Management", href: "yard-management.html" },
  { label: "Value-Added Services", href: "value-added-services.html" },
  { label: "EDI & API Integrations", href: "edi-api-integrations.html" },
];

const source = {
  metaLabel: "Meta title :",
  metaTitle: "3PL Warehouse & Distribution Services Ontario CA | Logos Logistics Distribution",
  heroTitle: "3PL warehouse in Ontario CA",
  heroBody:
    "Your freight is either moving or it is costing you. There is no middle ground. Logos Logistics Distribution is the 3PL warehouse in Ontario CA that clothing and footwear businesses trust for warehousing, fulfillment, and on-time delivery. We handle every part of your logistics so your team stays focused on growing the business. Real accountability built into every shipment we move.",
  servicesTitle: "Our Third Party Logistics Services",
  servicesIntro:
    "Running logistics in-house drains your team, your budget, and your patience. You did not build your business to chase shipments. Our third party logistics services cover receiving, storage, fulfillment, and delivery all in one place. One partner handles every moving part so nothing slips through and every order reaches its destination on time.",
  services: [
    {
      slug: "e-commerce-fulfillment",
      navLabel: "E-Commerce Fulfillment",
      title: "Ecommerce Fulfillment Services",
      body:
        "Every late order is a review you did not want and a customer you may not keep. Our apparel ecommerce fulfillment services handle pick, pack, and ship with the speed and accuracy customers expect today. We connect directly with your ecommerce platform so orders move from your store to your customer without delays.",
      proof: "Platform-connected pick, pack, and ship",
      icon: "package",
      image: "apparel-fulfillment.webp",
    },
    {
      slug: "inbound-outbound",
      navLabel: "Inbound & Outbound",
      title: "Inbound and Outbound Logistics",
      body:
        "One missed pickup can shut down a full day of work. Our inbound and outbound logistics team builds a solid system around every arrival and departure so delays and rushed fixes stop happening to your operation.",
      proof: "Arrival and departure coordination",
      icon: "truck",
      image: "warehouse-operations.webp",
    },
    {
      slug: "warehousing-distribution",
      navLabel: "Warehousing & Distribution",
      title: "Warehousing, Storage & Distribution Services",
      body:
        "Your business deserves storage that works as hard as you do. Our apparel warehousing and distribution services grow and adjust with your real volume so space is never a problem in any season. Secure inventory storage and live warehouse inventory management give you full control and visibility all year round.",
      proof: "Secure inventory storage and visibility",
      icon: "warehouse",
      image: "warehouse-operations.webp",
    },
    {
      slug: "transloading",
      navLabel: "Transloading",
      title: "Transloading Services",
      body:
        "Every extra day freight sits at the port is a day your customer is still waiting. Our transloading services move goods between containers, trucks, and rail before idle time builds up. Every transfer is planned ahead so your apparel supply chain keeps moving without an unexpected stop along the way.",
      proof: "Container, truck, and rail transfers",
      icon: "swap",
      image: "yard-storage.webp",
    },
    {
      slug: "edi-api-integrations",
      navLabel: "EDI & API Integrations",
      title: "API and EDI integration",
      body:
        "An order placed in your store should never get lost between systems. Our EDI and  API integration keep your inventory and orders in sync across every platform automatically. The same correct numbers show everywhere so your team stops fixing errors that should never happen.",
      proof: "Inventory and order sync",
      icon: "database",
      image: "facility-ui.png",
    },
    {
      slug: "yard-management",
      navLabel: "Yard Management",
      title: "Yard Management Services",
      body:
        "A full dock with no clear plan turns into a backup no one saw coming. Our yard management services give your team live visibility into every trailer, gate movement, and dock appointment. The dock is always ready and surprise charges stop showing up on your invoices.",
      proof: "Trailer, gate, and dock visibility",
      icon: "map",
      image: "yard-storage.webp",
    },
    {
      slug: "value-added-services",
      navLabel: "Value-Added Services",
      title: "3PL Value Added Services",
      body:
        "Kitting and labeling done in-house pulls your operation away from what it is actually built to do. Our value added services take kitting, labeling, repackaging, and returns completely off your plate. Every order leaves the facility looking exactly right and your team gets that time back to put toward work that actually moves the business forward.",
      proof: "Kitting, labeling, repackaging, returns",
      icon: "check",
      image: "fashion-scale.webp",
    },
    {
      slug: "cross-docking",
      navLabel: "Cross Docking",
      title: "Cross Docking",
      body:
        "Goods that cannot move right away are already falling behind schedule. Our cross-docking services move incoming shipments directly to outbound vehicles the same day with no storage wait in between. Everything comes in, gets sorted, and goes out fast on every shipment where timing is the priority.",
      proof: "Same-day inbound to outbound movement",
      icon: "route",
      image: "warehouse-team.webp",
    },
  ],
  processTitle: "How Our 3PL Process Works",
  processIntro:
    "Our process is built to keep your operations simple while ensuring steady movement across your supply chain. We support your growth with flexible 3PL warehousing services and reliable end-to-end logistics services.",
  process: [
    {
      title: "Step 1: Plan and Setup",
      body:
        "We start by understanding your products, order flow, and goals. As a trusted third party logistics provider, we build a setup that fits your operation and connect your systems for smooth coordination.",
    },
    {
      title: "Step 2: Inventory Receiving and Storage",
      body:
        "Your inventory is received, checked, and placed into secure inventory storage. Our warehousing and logistics services keep everything organized and easy to track in real time.",
    },
    {
      title: "Step 3: Order Fulfillment",
      body:
        "Our team handles order fulfillment services with accuracy and speed. Each order is picked, packed, and shipped based on your requirements so your customers get a consistent experience.",
    },
    {
      title: "Step 4: Shipping and Delivery",
      body:
        "We manage inbound and outbound logistics to keep shipments moving without delays. From dispatch to final delivery, everything stays on schedule and fully visible.",
    },
  ],
  locationTitle: "Serving Ontario CA and Surrounding Areas For Logistics and Distribution",
  locationBody:
    "Every extra mile between your warehouse and your customer is a mile that adds time to your delivery. Ontario CA sits at the center of Southern California's busiest freight corridor. Our logistics and distribution network reaches the whole country from this location while our warehousing and logistics services keep transit times short for your customers.",
  whyTitle: "Why Choose Logos Logistics Distribution Over Other 3PL Companies",
  whyParagraphs: [
    "Choosing the right partner can make a big difference in how smoothly your business operates. Our team focuses on clear systems, reliable processes, and accurate order fulfillment from receiving inventory to final delivery. Our third party logistics warehousing is flexible, keeping your products organized and ready to move without unnecessary delays.",
    "We provide full visibility into your stock and shipments, so you always know what is available and what is on the way. Our approach ensures consistent shipment management and efficient movement of goods, helping your business grow without adding extra complexity.",
  ],
  industriesTitle: "Industries We Serve Through Our Warehousing And Logistics",
  industriesIntro:
    "Our 3PL warehousing services are built for retail, ecommerce, manufacturing, and wholesale companies. Each of these industries runs on different timelines and has different needs for handling, compliance, and delivery. We build your logistics process around how your business actually works, not a standard template. Our warehousing and fulfillment model gives every operation the structure and accuracy it needs.",
  industries: [
    {
      title: "Warehousing for Apparel Brands",
      body:
        "Apparel businesses run on seasonal cycles with high product variety and shifting demand. Our apparel warehousing keeps stock organized, replenishment on schedule, and every order going out accurately regardless of the season.",
    },
    {
      title: "Footwear Brands & Warehousing",
      body:
        "Footwear inventory requires careful storage and accurate tracking at every stage. Our warehousing process keeps footwear stock levels steady, orders moving on time, and nothing sitting in the wrong place.",
    },
  ],
  testimonialsTitle: "What Businesses Say About Our 3PL Warehousing and Distribution Services",
  testimonialsBody:
    "One poor logistics experience can undo months of work you put into building customer trust. Here is what operations and supply chain leaders say about working with us as their third party logistics provider after seeing what real accountability looks like every day.",
  testimonialsPlaceholder: "[ Add Client Testimonials here ]",
  quoteTitle: "Get a Quote From Our 3PL Warehouse in Ontario CA",
  quoteBody:
    "Your logistics should be moving your business forward, not slowing it down. Every delayed shipment adds cost, risk, and lost trust. Logos Logistics Distribution gives you a system built for speed, accuracy, and full control so nothing falls behind. Get your custom 3PL warehouse in Ontario CA quote today and take control before delays cost you even more.",
  faqTitle: "FAQs",
  faqs: [
    {
      q: "What makes us different from other 3PL logistics services providers?",
      a:
        "Every client gets a dedicated account manager, live reporting, and storage that adjusts to their volume. Your logistics plan is built around your specific freight and business needs, not copied from a setup made for a different operation.",
    },
    {
      q: "Do ecommerce brands get platform support for warehousing and fulfillment?",
      a:
        "Yes. We connect directly with your ecommerce platform and order management system. Orders are picked, packed, and shipped with full tracking available for both your team and your customers from the moment each order is placed.",
    },
    {
      q: "How quickly can we get onboarded and go live?",
      a:
        "Onboarding is straightforward. Once we understand your volume, SKUs, and platform setup, we get your inventory received and your systems connected fast. Most clients are fully operational for 3PL warehousing services  within a few days, not weeks.",
    },
    {
      q: "Can inventory control services handle large seasonal volume changes?",
      a:
        "Yes. Flexible storage and a live warehouse inventory management system keep every product tracked in real time. The right space is always available and your stock data stays accurate whether it is your busiest or slowest time of year.",
    },
    {
      q: "What third party logistics solutions work best for fast-growing ecommerce brands?",
      a:
        "Pairing third party logistics fulfillment with real-time inventory connections from the start gives the best foundation for growth. Your operation scales with order volume and you never need to invest in your own warehouse space, staff, or equipment.",
    },
  ],
};

const threePlContent = {
  title: "3PL Services in Ontario, CA",
  intro:
    "Late orders, angry customers and rising shipping costs can quickly hurt business growth. When inventory is hard to track and fulfillment is slow, daily operations become stressful and confusing. Many businesses in apparel fulfillment and footwear logistics looking for 3PL services in Ontario, CA face these issues due to poor logistics systems. Our third party logistics solutions bring faster shipping, better control and steady long term business growth.",
  servicesTitle: "Our 3PL Services",
  servicesIntro:
    "Smooth operations start with accurate order handling and organized inventory. Our 3PL warehouse services offer real-time tracking, efficient packing, and flexible storage solutions. By using our expert third party logistics, businesses in apparel warehousing and footwear fulfillment experience fewer mistakes, faster processing, and reliable workflows. This allows teams to focus on growth and customer satisfaction instead of constantly managing logistics challenges.",
  services: [
    {
      title: "Warehousing, Storage & Distribution Services",
      body:
        "Poor warehouse layout makes it hard to fill orders on time. Our warehousing and distribution services organize shelves, speed up picking and packing, and coordinate shipments. Whether you manage seasonal clothing storage or high stock keeping unit footwear storage solutions, businesses can deliver products quickly and manage operations with ease.",
      icon: "warehouse",
    },
    {
      title: "eCommerce Fulfillment Services",
      body:
        "Incorrect or mislabeled orders lead to returns and unhappy customers. Our ecommerce order fulfillment tracks items and prepares them for accurate dispatch. Businesses running apparel ecommerce or footwear ecommerce fulfillment get smoother workflows and the ability to handle growing online demand with confidence.",
      icon: "package",
    },
    {
      title: "Inbound & Outbound Logistics",
      body:
        "Confusion in receiving or sending stock slows down operations. Our inbound and outbound logistics move goods through each step with proper checks and sequencing. For brands managing apparel distribution or footwear supply chain operations, this improves clarity and ensures supplies and orders are handled smoothly.",
      icon: "truck",
    },
    {
      title: "Cross Docking Services",
      body:
        "Products held too long at the warehouse cause delays. Our cross docking services move items directly from incoming to outgoing trucks without extra storage. This is especially valuable for fashion and apparel fulfillment and wholesale footwear suppliers managing tight retail delivery windows.",
      icon: "route",
    },
    {
      title: "Transload Services",
      body:
        "Freight can get stuck or mishandled during transport transfers. Our Transload Services carefully move products between trucks, trains, or containers, checking each item along the way. For importers handling apparel and footwear logistics, shipments stay on schedule and products are protected from damage.",
      icon: "swap",
    },
    {
      title: "Yard Management Services",
      body:
        "Crowded yards create delays and confusion. Our yard management system schedules arrivals and departures, tracks each vehicle, and keeps everything organized. This ensures inbound garment warehousing receipts and outbound footwear distribution loads move on time without problems.",
      icon: "map",
    },
    {
      title: "Value-Added Services",
      body:
        "Incorrect labels or mispacked kits slow fulfillment and upset customers. Our value-added services handle labeling, assembly, and packaging with precision. For apparel fulfillment companies this includes hang-tagging and poly-bagging, while footwear fulfillment orders get shoe box labeling and retail-ready packaging.",
      icon: "check",
    },
    {
      title: "Logistics Technology & Integration",
      body:
        "Disconnected systems make it hard to track stock or shipments accurately. Our logistics technology links inventory, orders, and delivery tracking in one platform. Our apparel warehouse management system and footwear inventory management software give clear updates and help goods move accurately across warehouses and transport routes.",
      icon: "database",
    },
  ],
  industriesTitle: "Industries We Serve",
  industriesIntro:
    "Keeping products safe, tracking inventory, and meeting delivery timelines can be challenging for many businesses. Our 3PL warehousing services support retail, e-commerce, manufacturing, and wholesale companies by storing goods efficiently, handling seasonal spikes, and preparing orders accurately. This reduces delays, lowers handling stress, and ensures customers receive the right products on time.",
  industries: [
    {
      title: "Apparel Industry",
      body:
        "From fast fashion brands to wholesale clothing distributors, the apparel industry demands accurate inventory control and reliable seasonal storage. Our apparel fulfillment services cover garment warehousing, ecommerce dispatch, and returns management under one roof.",
    },
    {
      title: "Footwear Industry",
      body:
        "Managing size runs, paired-unit picking, and high return rates makes footwear fulfillment one of the most demanding segments in logistics. Our footwear warehousing and distribution services serve wholesale suppliers,  shoe brands, and retail distributors accurately at scale.",
    },
  ],
  benefitsTitle: "Key Benefits of Outsourcing to Our Third Party Logistics Service Provider",
  benefits: [
    "Handling inventory, shipments, and orders internally can overwhelm teams and cause costly mistakes. Our 3PL warehouse services ensure accurate inventory tracking, organized order fulfillment, and streamlined operations. Businesses in apparel logistics benefit from faster order processing, reduced stress, and more efficient daily logistics management.",
    "During peak seasons or sudden order spikes, warehouse management becomes challenging. Flexible storage solutions, scalable support, and precise order handling from our third party logistics provider help footwear wholesale and apparel companies save time, minimize errors, and deliver products to customers on schedule.",
  ],
  areasTitle: "Areas Logos Logistics Distribution Serve",
  areasBody:
    "Looking for the best 3PL services in Ontario, CA? Logos Logistics Distribution provides expert warehousing, order fulfillment, and inventory solutions. Covering North Ontario, South Ontario, Rancho Cucamonga, Montclair, and Eastvale, they make logistics simple, speed up deliveries, and give businesses reliable support to meet customer expectations every time.",
  whyTitle: "Why Businesses Choose Us as Their 3PL Service Provider",
  why: [
    "Companies turn to our 3PL services to simplify supply chain operations. From precise apparel inventory management to smooth footwear distribution and reliable shipping, we help businesses improve efficiency, meet deadlines, and maintain strong customer satisfaction.",
    "Our team supports businesses with adaptable logistics solutions. With organized storage, timely order processing, and seamless distribution, we reduce operational stress, boost productivity, and allow companies to focus on growth without supply chain interruptions.",
  ],
  testimonialsTitle: "What Clients Say About Our Third Party Logistics Services",
  testimonialsBody:
    "See real feedback from businesses we serve. Our clients highlight faster delivery, organized warehousing, and hands-on support that keeps their operations running smoothly.",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Get a Quote for 3PL Services in Ontario, CA",
  quoteBody:
    "Looking for reliable 3PL Services in Ontario, CA? We believe great logistics is built on trust, not just technology. From the first pick to the final mile, your orders are handled with the same care you'd give them yourself. Your inventory, handled like our own. Ready to build something that lasts? Get your free quote today, or let's start with a conversation, no commitment.",
  faqTitle: "FAQs",
  faqs: [
    {
      q: "How can a 3PL provider simplify inventory management for e-commerce?",
      a:
        "A 3PL provider organizes stock, tracks levels, and manages replenishments. This ensures accurate inventory, prevents shortages or overstock, and keeps e-commerce operations running smoothly without manual monitoring.",
    },
    {
      q: "Which industries benefit most from 3PL logistics services?",
      a:
        "E-commerce, retail, healthcare, manufacturing, and consumer goods gain the most. 3PL solutions streamline supply chain logistics, helping businesses handle growing orders and multiple distribution channels efficiently.",
    },
    {
      q: "Can third party logistics providers handle e-commerce orders?",
      a:
        "Yes. They pick, pack, label, and ship products while managing returns, providing fast, accurate, and reliable order fulfillment for online businesses.",
    },
    {
      q: "How does Logos Logistics Distribution improve supply chain logistics?",
      a:
        "By coordinating warehousing, shipping, and distribution, 3PL reduces delays, improves accuracy, and keeps products moving efficiently from supplier to customer.",
    },
    {
      q: "Can 3PL scale with a growing business?",
      a:
        "Absolutely. 3PL services adjust storage, staffing, and shipping capacity as your business expands, ensuring seamless operations even with higher order volumes.",
    },
  ],
};

const ecommerceContent = {
  title: "E-Commerce Fulfillment Services in Ontario, CA",
  intro:
    "Dealing with pending orders, low stock, and late shipments can make running your apparel e-commerce business stressful. Our E-Commerce Fulfillment Services in Ontario, CA help you manage orders and inventory smoothly. With faster shipping and organized operations, your business stays on track, and customers get their products on time, creating a better experience they can rely on.",
  solutionsTitle: "Our E-Commerce Logistics Solutions for Apparel Brands",
  solutions: [
    "Growing your online store can be tricky with piled-up orders, low stock, and slow shipping. Our E-Commerce Logistics Solutions help apparel brands run operations smoothly, track inventory easily, and deliver orders on time.",
    "Our expert support drives faster apparel fulfillment, accurate inventory management, and higher customer satisfaction on every purchase. Your ecommerce brand runs efficiently, builds trust with customers, and grows without operational stress.",
  ],
  services: [
    {
      title: "Pick & Pack Services",
      body:
        "Mistakes in selecting or packing products cause damage, returns, and unhappy customers. Our pick & pack services ensure each item is carefully chosen and securely packed, preventing errors and preparing products perfectly for smooth, efficient warehouse operations.",
      icon: "package",
    },
    {
      title: "E-Commerce Shipping Solutions",
      body:
        "Slow dispatch and delayed movement disappoints customers and hurts your brand. Our E-Commerce shipping solutions manage apparel ecommerce fulfillment efficiently, choose the best carriers, and monitor delivery across your apparel supply chain, ensuring fast product movement and keeping buyers satisfied.",
      icon: "truck",
    },
    {
      title: "E-Commerce Returns Management Services",
      body:
        "We inspect, restock, and process refunds quickly and accurately. Our e-commerce returns management services keep your operations smooth through reliable apparel return support services, ensuring every returned item is handled without delay.",
      icon: "swap",
    },
    {
      title: "Last-Mile Delivery Services",
      body:
        "Missed stops and wrong addresses frustrate customers and hurt your brand. Our apparel logistics services plan clear routes and ensure packages reach buyers directly, improving reliability, on-time delivery, and satisfaction.",
      icon: "route",
    },
    {
      title: "Inventory Management Services",
      body:
        "Stockouts and overselling kill apparel businesses. Our apparel inventory management software tracks quantities across all stock, updates availability in real time, and prevents costly gaps, keeping your apparel warehouse storage running efficiently.",
      icon: "database",
    },
    {
      title: "E-Commerce Inventory Tracking Services for Apparel & Footwear",
      body:
        "Our e-commerce inventory tracking services monitor stock locations, verify quantities, and provide real-time visibility across all apparel and footwear inventory. With accurate footwear inventory management, businesses can ensure faster order preparation, reduce stockouts, and maintain smooth daily fulfillment operations.",
      icon: "check",
    },
  ],
  integrationsTitle: "Seamless Shopify & Marketplace Integrations for Easy Fulfillment",
  integrations: [
    "Managing Shopify and marketplaces manually creates mistakes, delays, and extra work. Our Shopify fulfillment service connects your apparel logistics, stock, and orders automatically across all channels for seamless connectivity.",
    "Fewer errors, faster delivery, and smoother operations lead to happier customers. A single, reliable system saves time, reduces stress, and supports consistent business growth without constant oversight.",
  ],
  processTitle: "How Our E-Commerce Fulfillment Works",
  processIntro:
    "Running an online apparel and footwear store efficiently requires accurate inventory tracking and timely order handling. Our ecommerce warehouse fulfillment process ensures products move smoothly from warehouse to customer every time.",
  process: [
    {
      title: "Receive & Organize Inventory",
      body:
        "Incoming products are inspected, cataloged, and stored in our apparel warehouse storage. Accurate stock updates prevent errors and enable smooth order fulfillment from day one.",
    },
    {
      title: "Pick Orders",
      body:
        "Orders are reviewed and items are selected with precision. Our team ensures accuracy, minimizing mistakes while preparing products efficiently for timely apparel order fulfillment.",
    },
    {
      title: "Pack Products",
      body:
        "Items are securely packaged with protective materials, proper labeling, and optimized packaging solutions. This prevents damage during transit and ensures customers receive products in perfect condition.",
    },
    {
      title: "Ship & Track",
      body:
        "Orders are dispatched through reliable carriers with real-time tracking. Our footwear fulfillment services ensure customers receive purchases quickly and accurately every time.",
    },
  ],
  areasTitle: "Areas We Serve for E-Commerce Order Fulfillment",
  areasBody:
    "Our apparel and footwear fulfillment service covers all major areas of Ontario, CA, including Rancho Cucamonga, Fontana, Upland, Chino, Pomona, Montclair, Rialto, San Bernardino, Corona, and Riverside. We manage local and regional deliveries efficiently, ensuring orders leave the warehouse promptly and reach customers on time across Southern California.",
  whyTitle: "Why Apparel and Footwear Brands Choose Our Fulfillment Services",
  why: [
    "Handling orders, inventory, and shipments internally can overwhelm growing eCommerce brands. Mistakes cost time and money, slowing customer satisfaction. Our apparel fulfillment services ensure accurate tracking, organized storage, and timely shipping.",
    "Brands choose us because we simplify logistics, prevent delays, and turn fulfillment challenges into smooth, reliable operations.",
  ],
  industriesTitle: "Industries We Fulfill For",
  industriesIntro:
    "Most fulfillment providers handle every order the same way. We build our process around what your industry actually demands. From retail and wholesale businesses to ecommerce sellers and garment manufacturers, we provide scalable fulfillment solutions that keep operations running smoothly at every level.",
  industries: [
    {
      title: "Fulfillment for the Apparel Industry",
      body:
        "Apparel businesses run on tight schedules with high order volumes and seasonal demand that shifts fast. We handle receiving, storage, and apparel ecommerce fulfillment so your stock stays accurate and every order goes out on time.",
    },
    {
      title: "Fulfillment for Footwear Brands",
      body:
        "Footwear orders require careful handling at every stage. We support distributors and suppliers with accurate picking, secure packing, and reliable dispatch so every footwear ecommerce fulfillment order arrives in perfect condition and nothing falls behind.",
    },
  ],
  resultsTitle: "Real Results From eCommerce Brands We've Helped",
  resultsBody:
    "Many apparel and footwear brands struggle with backlogs, lost inventory, and slow delivery. Our ecommerce order fulfillment for apparel brands has helped businesses reduce errors, speed up shipping, and improve customer reviews. From small clothing brands to fast-scaling footwear fulfillment operations, companies experience better stock visibility and confident growth.",
  testimonialsTitle: "Client Testimonials",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Get Started With Our E-Commerce Fulfillment Services Today",
  quoteBody:
    "Every delayed shipment is a customer you may never get back. Unorganized inventory and late shipments make customers angry and trust disappear fast. Our e-commerce fulfillment services in Ontario, CA handle apparel order fulfillment, footwear packing, and shipping so mistakes disappear, orders arrive on time, and your business grows without constant stress. Contact us today and let's build a fulfillment system your customers can rely on.",
  faqTitle: "FAQs",
  faqs: [
    {
      q: "How do you ensure inventory accuracy?",
      a:
        "Using advanced inventory tracking, barcode scanning, and organized storage, we keep apparel and footwear stock levels precise, preventing overselling and shipment errors while giving brands full visibility.",
    },
    {
      q: "Can small apparel businesses use your services?",
      a:
        "Yes. Our apparel ecommerce fulfillment solutions scale with your brand, providing reliable, cost-effective shipping for companies of all sizes.",
    },
    {
      q: "Do you handle returns and exchanges for footwear brands?",
      a:
        "Absolutely. Our reverse logistics apparel and footwear processing ensures returned products are handled efficiently, inventory stays accurate, and customers remain satisfied without extra effort from your team.",
    },
    {
      q: "What makes your fulfillment process different?",
      a:
        "Our fulfillment service combines smart technology and expert staff to manage apparel inventory management and footwear orders efficiently, reducing mistakes and ensuring fast, error-free deliveries.",
    },
    {
      q: "How do your fulfillment services improve delivery speed?",
      a:
        "Our apparel logistics and fulfillment process uses real-time inventory tracking, ensuring orders reach customers faster and more reliably than manual handling.",
    },
  ],
};

const inboundContent = {
  title: "Inbound & Outbound Logistics Services for Apparel Brands in Ontario, CA",
  intro: [
    "Supply chains don't fail all at once. They slip quietly through untracked shipments, delayed deliveries, and dispatches nobody followed up on. In the apparel industry, a late seasonal collection does not just mean delayed inventory. It means unsold stock and revenue that does not come back.",
    "That is why apparel brands, garment manufacturers, and clothing distributors across the region trust our Inbound & Outbound Logistics Services in Ontario, CA to keep their operations running smoothly, every single day.",
  ],
  inboundTitle: "Inbound Logistics Management for Apparel Industry",
  inboundBody:
    "Garment supply chains break when no one watches the details. In apparel, one receiving error across sizes, colorways, and style numbers can throw your entire inventory off. Our inbound logistics management tracks every arrival, confirms freight details, and makes sure nothing enters your workflow unverified. From bulk garment imports to high-volume seasonal intake, every shipment is accounted for before it moves forward.",
  inboundServices: [
    {
      title: "Inbound Freight & Freight Receiving",
      body:
        "One unverified load can throw your entire inventory off balance. Our freight management services check every load against your purchase order. We spot damage and flag missing items at the dock. This helps prevent bigger problems.For businesses managing apparel warehousing or time-sensitive product lines, this level of dock accuracy is not optional. It is the baseline.",
      icon: "truck",
    },
    {
      title: "Inventory Replenishment & Material Handling",
      body:
        "Running out of a best-selling size or colorway mid-season is a loss that never comes back. We schedule inventory replenishment around actual demand so shortages never catch you off guard. Our material handling services ensure each item is stored correctly and moved safely when needed. This includes stored apparel and high-turnover wholesale goods.",
      icon: "database",
    },
  ],
  outboundTitle: "Outbound Logistics & Freight Solutions",
  outboundBody:
    "Your customer will not remember how hard your team worked. They will remember if their order arrived late or damaged. We take that seriously. Our outbound logistics and freight solutions handle carrier booking, load accuracy, and shipment tracking so every delivery leaves right and arrives the way your customer expects. That includes apparel fulfillment services and footwear dispatch handled with the same care as every other order.",
  outboundServices: [
    {
      title: "Outbound Logistics in Supply Chain Management",
      body:
        "Shipping fast is not enough if accuracy is missing. Outbound logistics in supply chain management connects every step from the warehouse to the final delivery. We plan routes, select carriers, and verify loads so every order reaches the right customer at the right time, whether it is a direct to consumer apparel shipment or a bulk wholesale order.",
      icon: "route",
    },
    {
      title: "Apparel & Footwear Product Flow Management",
      body:
        "Every day goods stay stuck between receiving and fulfillment, costs rise and customers grow impatient. Product flow management keeps both sides of the operation in sync so nothing stalls, nothing piles up, and every order moves out on time. For apparel fulfillment operations with high product variety and seasonal cycles, this coordination is what keeps the entire operation competitive.",
      icon: "swap",
    },
  ],
  industriesTitle: "Industries We Work With",
  industriesIntro:
    "Every apparel and footwear business moves goods differently. Seasonal cycles, large product ranges, and customer expectations all create their own challenges. We build our process around what your operation actually needs, whether you manage retail, run wholesale distribution, or ship directly to customers.",
  industries: [
    {
      title: "Apparel & Clothing Industry",
      body:
        "Apparel operations run on tight seasonal cycles with constant product movement. We manage inbound freight, storage, and outbound dispatch for apparel logistics so stock arrives on time, orders go out accurately, and nothing slows your operation down.",
    },
    {
      title: "Footwear & Distribution Industry",
      body:
        "Footwear shipments require accuracy at every handoff from receiving to delivery. We handle inbound inspection, inventory control, and outbound dispatch for footwear wholesalers so every order reaches the right place on time.",
    },
  ],
  benefitsTitle: "Benefits of Our Inbound & Outbound Logistics Services",
  benefitsBody:
    "Working with the right logistics partner changes how smoothly a business runs. Our inbound and outbound logistics services give businesses full shipment visibility, lower handling costs, and faster order fulfillment. From footwear fulfillment services to inbound transportation coordination and outbound dispatch, every part of the operation is managed with care so nothing falls through the cracks.",
  processTitle: "Our Inbound & Outbound Logistics Process",
  process: [
    {
      title: "Step 1: Freight Coordination and Scheduling",
      body:
        "We connect with suppliers and carriers early to plan inbound freight arrivals, confirm load details, and stop dock delays before they happen.",
    },
    {
      title: "Step 2: Receiving, Inspection and Documentation",
      body:
        "Our freight management services check, inspect, and record all incoming goods at the dock before anything moves into storage. For warehouse apparel and footwear inventory, this step protects stock accuracy from the start.",
    },
    {
      title: "Step 3: Inventory Management and Replenishment",
      body:
        "Inventory replenishment is based on real demand so stock levels stay steady and shortages never slow the operation down. Businesses managing an apparel supply chain rely on this step to stay ahead of seasonal shifts and demand changes.",
    },
    {
      title: "Step 4: Outbound Dispatch and Delivery Tracking",
      body:
        "Orders are packed and sent out with full carrier support. Every shipment is tracked all the way to delivery so customers always know what to expect, including reverse logistics footwear returns processed with the same accuracy as standard outbound orders.",
    },
  ],
  areasTitle: "Areas We Serve",
  areas: [
    "Most businesses don't realize how much a wrong location costs them until a shipment is late. Our 44,000 sq ft facility in Ontario, CA is one of the most strategically connected logistics hubs in Southern California, positioned within reach of major ports, rail yards, and distribution networks without unnecessary handling stops or added transit time.",
    "We work with businesses in and around Ontario, including Rancho Cucamonga, Chino, and Fontana. With direct access to major freeways, our inbound and outbound logistics process keeps freight moving efficiently for apparel logistics operations, footwear distribution, and local businesses that need a dependable partner close by.",
  ],
  whyTitle: "Why Choose Logos Logistics Distribution for Inbound & Outbound Logistics?",
  why: [
    "Handing over a supply chain takes trust. At Logos Logistics Distribution, that trust is earned through consistency, transparency, and real accountability. Our logistics solutions are built around the needs of apparel fulfillment center operations and footwear solutions, covering both ends of the operation under one roof so there are fewer errors, stronger communication, and a team genuinely committed to keeping the business running well.",
    "We do not just move freight. We build systems that protect operations, reduce costs, and keep customers happy. Every business that works with us gets a dedicated team, full shipment visibility, and freight management services designed to deliver results that actually matter to the bottom line.",
  ],
  testimonialsTitle: "Client Testimonials",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Ready to Optimize Your Logistics?",
  quoteBody:
    "One poorly managed inbound shipment or one late outbound delivery can cost a loyal customer forever. Most businesses miss the warning signs until the damage is done. Contact Logos Logistics Distribution today for a free consultation on our Inbound & Outbound Logistics Services in Ontario, CA and find out how we help apparel brands and footwear businesses turn their supply chain into their strongest business asset.",
  faqTitle: "FAQs",
  faqs: [
    {
      q: "What makes your logistics services different from other providers?",
      a:
        "We handle complete logistics solutions under one roof for apparel and footwear businesses that cannot afford gaps in their supply chain. That means one point of contact, fewer mistakes, and a team that stays responsible from the first shipment received to the last order delivered.",
    },
    {
      q: "How quickly can operations begin with inbound logistics services?",
      a:
        "Faster than most businesses expect. Once the needs are confirmed, inbound freight schedules, receiving steps, and outbound dispatch are all set up so everything runs smoothly from day one, whether you are managing apparel fulfillment services or a footwear store replenishment cycle.",
    },
    {
      q: "What happens if a shipment arrives damaged or with missing items?",
      a:
        "Every incoming load goes through a full freight receiving service at the dock. If damage or shortages are found, they are recorded and reported right away before anything enters inventory or affects orders. This applies to every product we handle, from apparel inventory management to wholesale footwear receiving.",
    },
    {
      q: "Can replenishment be managed around actual demand?",
      a:
        "Yes. The entire inbound supply chain schedule is built around real demand data. Stock arrives before shortages happen so the operation stays fully supplied and customers are never left waiting. For businesses managing apparel dropshipping, direct to consumer apparel, or footwear wholesalers, this means demand is planned well in advance and nothing runs short.",
    },
    {
      q: "How do we get started with Inbound & Outbound Logistics Services?",
      a:
        "Getting started is simple. Reach out to the team, share what the operation needs, and a complete logistics plan will be built around the business from day one, specifically designed for apparel 3pl and footwear fulfillment services requirements.",
    },
  ],
};

const transloadContent = {
  title: "Transloading Services in Ontario, CA for Fast & Efficient Cargo Transfer",
  intro:
    "Every idle container is an invoice your business cannot afford. At Logos Logistics Distribution, our transloading services in Ontario, CA facilitate the seamless transfer of cargo between different modes of transportation, such as rail to truck or ship to truck, optimizing your shipping routes to reduce costs and keep your supply chain moving. We proudly support apparel logistics and footwear supply chain operations that depend on speed and accuracy at every transfer point.",
  servicesTitle: "Our Transload Services at Logos Distribution",
  servicesIntro:
    "The wrong transloading company makes a simple transfer feel like a nightmare. At Logos Distribution, we offer a full range of transloading services built around your cargo type, your schedule, and your budget. No guesswork, no hidden steps. Just clean, fast, and reliable transloading operations that get your freight where it needs to go.",
  services: [
    {
      title: "Container Unloading and Unloading Inspection",
      body:
        "You hired a team to unload your container and they took three hours. Your driver is waiting, your customer is calling, and nothing is moving. We unload fast, check every piece as it comes out, and make sure your container transloading moves to the next step without sitting and waiting.",
      icon: "truck",
    },
    {
      title: "Floor-Load to Pallet Conversion",
      body:
        "You paid for fast delivery but your floor-loaded container just slowed everything down at the dock. We convert loose freight into clean, organized pallets ready for outbound shipping. This saves serious handling time, reduces damage risk, and keeps your supply chain transloading process moving without unnecessary stops.",
      icon: "package",
    },
    {
      title: "Overweight Container Transloading",
      body:
        "Your container just got rejected at the scale and now you are facing fines and a delayed shipment. We redistribute heavy cargo across multiple vehicles to meet legal weight limits. Our team handles bulk transloading and weight checks with accuracy so you avoid rejected loads and keep your freight moving on time.",
      icon: "database",
    },
    {
      title: "Labeling and Repackaging",
      body:
        "Your shipment got rejected because the label was wrong and now you are dealing with chargebacks and angry customers. We inspect, relabel, and repackage your apparel and footwear cargo before it goes out. Every piece leaves our transloading warehouse properly labeled and protected so your customers receive it right the first time.",
      icon: "check",
    },
    {
      title: "Same-Day Container Turns",
      body:
        "Every extra day your container sits, you are paying fees you never planned for. We turn containers the same day so your equipment goes back fast. Our team is ready when your container arrives so your transloading logistics never slow down your operation.",
      icon: "route",
    },
    {
      title: "Short-Term Freight Holding",
      body:
        "Your freight is ready but the delivery window is not open yet and you have nowhere safe to put it. We hold your cargo in our transloading and warehousing services facility until dispatch time. Safe, organized, and flexible with no long-term commitments required.",
      icon: "warehouse",
    },
  ],
  processTitle: "How Our Transload Process Works",
  processIntro:
    "Most cargo problems happen because no one explained the process clearly. We keep it simple and step by step so you always know where your freight is and what happens next. Here is exactly how our transloading in logistics process runs from arrival to outbound dispatch.",
  process: [
    {
      title: "Drayage and Inbound Coordination",
      body:
        "If your container is at the port and you have no idea who is picking it up or when. We coordinate drayage and transloading together so containers are picked up on time and delivered without gaps. One team handles everything so nothing falls through.",
    },
    {
      title: "Cargo Inspection and Unloading",
      body:
        "Nobody checked your container before unloading and now there is a damage dispute you cannot prove. We inspect every container first, verify cargo counts, and document everything on the spot. Our container transloading services are built around accuracy from the very first step.",
    },
    {
      title: "Sorting, Palletizing and Processing",
      body:
        "Once unloaded, we sort and organize your freight based on your exact outbound requirements. Every pallet is built correctly and labeled clearly before it moves anywhere. Our full-service transloading means your cargo is outbound ready the moment it leaves our hands.",
    },
    {
      title: "Outbound Dispatch via LTL or FTL",
      body:
        "Your freight is processed and ready to go. We coordinate outbound dispatch through Less Than Truckload (LTL) or Full Truckload (FTL) based on your load size. Our team manages transloading transportation so your cargo leaves on schedule every time.",
    },
  ],
  areasTitle: "Transload Service Areas We Cover",
  areasBody:
    "You need a partner close to the port, the rail yard, and your delivery points. We serve businesses across Ontario, CA including Downtown Ontario, Ontario Ranch, North Ontario, and the areas surrounding Ontario International Airport. Our transloading facility is positioned near major ports and rail yards, making us the go-to choice for rail to truck transloading and container freight in the area.",
  industriesTitle: "Transloading Solutions for Industries We Serve",
  industriesIntro:
    "Your cargo has specific needs and not every facility is set up to handle them correctly. We work with businesses across retail, e-commerce, manufacturing, wholesale, and apparel. Our transloading operations are built to handle each industry the right way so your freight moves without issues, delays, or extra costs.",
  industries: [
    {
      title: "Apparel & Garment Transloading",
      body:
        "Apparel shipments move on tight schedules with little room for error. We handle container unloading, palletizing, and outbound dispatch for apparel logistics operations so every transfer moves cleanly and nothing holds up your next delivery.",
    },
    {
      title: "Transloading for Footwear Brands",
      body:
        "Footwear cargo requires careful handling at every transfer point. We manage inbound inspection, sorting, and outbound dispatch for footwear supply chain operations so every load leaves our facility accurately processed and on time.",
    },
  ],
  whyTitle: "Why Choose  Logos Logistics Distribution for Transloading",
  why: [
    "Most transloading companies hand off your container and disappear. At Logos Logistics Distribution, we stay involved at every step, from inbound coordination to outbound dispatch, so nothing gets missed and your freight never sits longer than it should.",
    "Our transloading facility is built for speed and clean execution. Same-day turns, accurate damage reporting, and proper palletizing are not extras here. They are standard every single time.",
  ],
  testimonialsTitle: "Client Testimonials",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  pricingTitle: "Transloading Pricing Plans",
  pricingBody:
    "We believe good transloading services should be straightforward and fairly priced. Here is a look at what we offer so you can find the right fit for your freight needs.",
  quoteTitle: "Ready to Transload? Get a Free Quote Today",
  quoteBody:
    "Every load you delay is a client your competitor is ready to steal. Logos Logistics Distribution offers Transloading Services in Ontario, CA that keep your freight moving without the usual headaches. We move your cargo from container to truck fast, clean, and on time. Do not let detention fees and delays drain your business any longer. Call us today and keep your supply chain moving.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is transloading in logistics?",
      a:
        "Transloading in logistics means moving cargo from one transport type to another, like from a ship to a truck. It helps businesses cut costs on long-haul routes by using the cheapest transport mode for each leg of the journey.",
    },
    {
      q: "How do I know if my shipment needs transloading?",
      a:
        "If your cargo is arriving by rail or ocean container but needs to reach a destination only accessible by truck, transloading services are the right solution. It is also useful when containers are overweight or need repackaging before final delivery.",
    },
    {
      q: "What are transloading costs based on?",
      a:
        "Transloading costs depend on cargo type, volume, handling requirements, and turnaround time. Factors like repackaging, relabeling, or same-day turns may affect the final rate. Contact us for a quote based on your specific shipment needs.",
    },
    {
      q: "How is transloading different from standard freight forwarding?",
      a:
        "Freight forwarding arranges transportation across the full route. Transloading logistics focuses specifically on the physical transfer of cargo between transport modes at a facility. Both can work together as part of a complete supply chain transloading strategy.",
    },
    {
      q: "Can transloading help reduce my overall shipping costs?",
      a:
        "Yes. By combining cheaper long-haul transport like rail with local truck delivery, transloading solutions can significantly lower your total shipping spend compared to using a single transport mode for the entire route.",
    },
    {
      q: "Do I need to be present during the transloading process?",
      a:
        "No. Our team handles everything at our transloading facility. You receive full documentation including cargo counts and damage reports so you stay informed without being on site.",
    },
  ],
};

const valueAddedContent = {
  title: "3PL Value-Added Services in Ontario, CA",
  intro:
    "When your order volume grows faster than your current setup can handle, the first thing that suffers is the quality your customers expect from you. At Logos Logistics Distribution, our value added services in Ontario, CA give apparel and footwear businesses the speed, reliability, and precision they need. We manage every fulfillment detail so your products always leave our facility accurate and on time.",
  servicesTitle: "Our Value-Added Warehousing Services",
  servicesIntro:
    "When your warehouse only handles storage, everything else becomes your problem to coordinate. Labeling, kitting, and repackaging pulled across multiple vendors wastes time and creates costly errors. Our value-added warehousing services bring all of that under one roof so you get accurate, retail-ready products moving out without the back and forth of managing multiple service providers.",
  services: [
    {
      title: "Custom Labeling & Retail Compliance Services",
      body:
        "Every retailer and marketplace comes with its own set of labeling requirements and one missing barcode or incorrect price ticket can hold up your entire shipment. Our product labeling services take that pressure off your team by accurately labeling every product for every destination so nothing gets delayed, rejected, or charged back.",
      icon: "check",
    },
    {
      title: "Repackaging, Ticketing & Packaging Solutions",
      body:
        "Buyers and customers make up their minds quickly and wrong packaging or a missing ticket is enough to lose their confidence before they even reach your product. Our repackaging services, ticketing, and packaging solutions take care of every detail so each item reaches its destination prepared, presentable, and ready to make the right impression.",
      icon: "package",
    },
    {
      title: "Kitting & Assembly for eCommerce Brands",
      body:
        "Making bundle orders manually leaves too much room for error and when volume increases, those errors increase with it. Our kitting and assembly services bring multiple items together into one accurate, ready-to-ship unit on every order so your customers receive exactly what they paid for every single time.",
      icon: "warehouse",
    },
  ],
  locationTitle: "Value-Added Services Across Ontario",
  location: [
    "Your fulfillment partner's location determines how fast your orders move and how much they cost to ship. Ontario, CA sits at the center of one of the busiest freight corridors on the West Coast and that location works directly in your favor. Brands across Southern California and beyond choose this location because it puts their inventory closer to major carriers and keeps shipping costs under control.",
    "At Logos Logistics Distribution, our warehouse value added services run from a 44,000 square foot facility built to handle your orders at any scale. Whether you ship hundreds of units or thousands, we have the capacity to match your pace.",
  ],
  processTitle: "How Our Value-Added Warehouse Services Work",
  processIntro:
    "Getting started is straightforward. We learn your requirements, build a consistent process around them, and handle every order with the same level of accuracy from day one.",
  process: [
    {
      title: "Step 1: Tell Us What Your Products Need",
      body:
        "Share your product details and exactly how they need to be handled. Our team reviews every requirement carefully so nothing is assumed or missed. The more we understand upfront, the smoother your warehouse value added services run from day one.",
    },
    {
      title: "Step 2: We Build Your Fulfillment Workflow",
      body:
        "We design a custom workflow around specific product requirements. Every step is documented before we begin so value added warehouse services run the same way on every order. There is no guesswork and no inconsistency once the process is in place.",
    },
    {
      title: "Step 3: We Handle Labeling, Kitting, and Repackaging",
      body:
        "Our team processes product labeling services, assembly and kitting services, repackaging, and ticketing with speed and accuracy. Every item is verified before it moves to the next stage so nothing ships until it meets the exact standard required.",
    },
    {
      title: "Step 4: Full Visibility on Every Order",
      body:
        "Our team provides clear, regular updates on inventory status and what has been processed. There is no need to follow up or chase information. Our value-added warehousing services are built on complete transparency so operations stay fully under control at every stage.",
    },
  ],
  benefitsTitle: "Benefits of Our Value-Added Warehousing Services",
  benefits: [
    "When operations are scattered across different partners and systems, so is your time, your budget, and your attention. Errors increase, costs rise, and your team spends more time fixing problems than running the business.",
    "Our value added services in logistics bring everything under one roof. Faster processing, fewer errors, shorter turnaround times, and lower operational costs come with having every detail handled by one dedicated team. No more inconsistent results, no more missed standards, and no more delays that reach your customers before you do.",
  ],
  industriesTitle: "Industries We Serve with Value Addition Services",
  industriesIntro:
    "Not every product ships the same way and not every business has the same requirements before an order goes out. A one-size approach creates gaps that show up as errors, returns, and unhappy customers. Our value addition services are built to work across ecommerce brands, retail suppliers, and wholesale distributors.",
  industries: [
    {
      title: "Apparel & Fashion Brands",
      body:
        "Apparel and fashion brands deal with constant label changes, seasonal packaging updates, and strict retail compliance requirements. We handle apparel fulfillment labeling, kitting, and repackaging so every product leaves our facility accurate, retail-ready, and on time.",
    },
    {
      title: "Footwear Suppliers & Ecommerce Sellers",
      body:
        "Footwear suppliers and ecommerce sellers need precise ticketing, accurate bundling, and clean packaging on every order. We manage every detail so your footwear fulfillment meets retailer standards and reaches customers in perfect condition every time.",
    },
  ],
  whyTitle: "Why Brands Choose Us for 3PL Value-Added Services",
  why: [
    "When a fulfillment partner cannot handle growing volume, errors and delays follow and customers feel it before you do. That gap between what your business needs and what your partner delivers is exactly where revenue gets lost.",
    "Brands choose our 3PL value added services because accuracy is built into every step, requirements are never assumed, and shipments go out right the first time. For apparel and clothing brands where one wrong label or missed ticket can hold up an entire shipment, that level of care makes all the difference. One dedicated team, one consistent process, and the capacity to scale with your business without missing a step.",
  ],
  resultsTitle: "Real Results from Our Value-Added Warehouse Services",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  pricingTitle: "Transparent Pricing for Value Added Warehouse Services",
  pricingBody:
    "Our value added services in logistics are priced based on your specific products, services, and monthly volume. No hidden fees and no unnecessary charges. Share your requirements and we will send a clear, custom quote built around your operation.",
  quoteTitle: "Get a Custom Quote for 3PL Value-Added Services in Ontario, CA",
  quoteBody:
    "The longer your fulfillment stays inconsistent, the harder it becomes to fix the reputation it leaves behind. Logos Logistics Distribution provides complete value added services in Ontario, CA including labeling, kitting, repackaging, and ticketing from our facility. Contact our team today and get your value added warehousing services moving in the right direction.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What are value-added services in a 3PL warehouse?",
      a:
        "They go beyond standard storage and shipping. They include labeling, kitting, repackaging, ticketing, and assembly so products are fully prepared and compliant before they ship to any retailer or marketplace.",
    },
    {
      q: "Do you work with both ecommerce brands and wholesale distributors?",
      a:
        "Yes. Our value addition services are built to serve ecommerce brands, retail suppliers, and wholesale distributors. Each business gets a workflow designed around their specific products and destination requirements.",
    },
    {
      q: "Can your services scale as my business grows?",
      a:
        "Yes. Our value added warehouse services are fully scalable. Whether you process 200 orders or 20,000 a month, we adjust our capacity to match your volume so accuracy and turnaround stay consistent as you grow.",
    },
    {
      q: "Do you handle labeling and kitting for apparel and footwear businesses?",
      a:
        "Yes. We work with apparel brands and footwear suppliers that have strict retail compliance requirements. Our team manages labeling, kitting, and repackaging based on your specific retailer standards so nothing gets rejected or charged back.",
    },
    {
      q: "Can you manage seasonal volume spikes for apparel and footwear brands?",
      a:
        "Yes. Our value added warehouse services are fully scalable. Apparel and footwear businesses running seasonal cycles can increase volume without worrying about accuracy or turnaround time falling behind.",
    },
  ],
};

const ediApiContent = {
  title: "EDI & API Integration Services in Ontario, CA for 3PL Logistics",
  intro:
    "A disconnected system does not just slow your team down. It costs you orders, clients, and time you cannot get back. Most businesses do not realize how much manual work their team is carrying until a retail partner flags an error or a shipment misses its window. Our EDI and API integration services in Ontario, CA are built for apparel and footwear 3PL operations that cannot afford those gaps. We close them permanently.",
  solutionsTitle: "Custom EDI & API Integration Solutions for 3PL & Warehouse Operations",
  solutionsIntro:
    "Your warehouse is busy, your clients demand accuracy, and one disconnected platform is all it takes to lose a client you spent months winning. At Logos Logistics Distribution, we build custom API integration services and EDI solutions designed around how your operation actually works. We map your data, connect your platforms, and keep everything moving in sync because in 3PL, a missed sync is a missed shipment.",
  solutions: [
    {
      title: "EDI Integration Solutions",
      body:
        "Missing one document requirement from a retail partner can trigger a penalty before your team even realizes something went wrong. Our EDI integration services cover automated document exchange, failed transaction fixes, and fast retail partner onboarding for 3PLs, distributors, and manufacturers so your EDI integration never becomes the reason an order falls through.",
      icon: "check",
    },
    {
      title: "API Integration Services",
      body:
        "Jumping between systems to find one order update is not a process, it is a sign your platforms are not working together. Our API integration services build real-time connections between your warehouse, inventory, shipping, and eCommerce platforms so your data stays accurate, orders move faster, and your API integration solutions grow as your business does.",
      icon: "database",
    },
    {
      title: "WMS, ERP & TMS Integration",
      body:
        "Wrong inventory numbers, delayed orders, and frustrated clients all start from the same place. Your systems are showing different data. Our data integration services and system integration services cover full data mapping, real-time syncing, and complete platform connectivity so your team stays focused on shipments, not fixing data errors all day.",
      icon: "warehouse",
    },
    {
      title: "eCommerce & Marketplace Integration",
      body:
        "Your storefront is taking orders while your warehouse has no idea yet, and that disconnect is exactly where fulfillment errors start building up. We deliver EDI ecommerce integrations and API integration setups that sync your apparel ecommerce store to your warehouse in real time so every order flows through without a manual step.",
      icon: "package",
    },
  ],
  processTitle: "How Our EDI & API Integration Process Works",
  processIntro:
    "Most EDI integration and API integration projects fail because someone skipped the planning. We get every detail right before anything goes live so your operation launches clean, runs without issues, and scales without the problems that come from rushing a setup your business depends on every day.",
  process: [
    {
      title: "Step 1: Discovery & System Audit",
      body:
        "Before we build anything, we learn how your operation runs, which systems you use, and where the gaps exist. We document your current setup and identify every connection point that needs to be built or corrected before your supply chain integration work begins.",
    },
    {
      title: "Step 2: Integration Architecture & Data Mapping",
      body:
        "Once we understand your systems, we map how data will move between platforms and choose the right approach before a single line of code is written. Whether it is EDI system integration or a full API build, every decision here determines the quality of your final integration.",
    },
    {
      title: "Step 3: Build, Configure & Test",
      body:
        "Our team builds your integration and tests it the way your operation actually runs, high order days, multiple platforms, and back to back transactions. For EDI integration solutions or complex API builds, we run multiple test cycles to confirm everything works correctly before it goes live.",
    },
    {
      title: "Step 4: Go-Live & Ongoing Support",
      body:
        "When your integration goes live, we stay with you, monitoring performance, resolving issues, and applying updates as your business grows. Our ongoing EDI integration services and API integration support means you always have a technical team ready so your operation never sits waiting for a fix.",
    },
  ],
  differenceTitle: "What Makes Our EDI & API Integration Services Different",
  differenceBody:
    "Most vendors set up your integration and walk away. We build a system around how your operation actually works. Our team knows 3PL workflows, retail partner needs, and warehouse operations inside out, and we always stay with you long after go-live. That is exactly why our logistics EDI integration and data integration services get results that other integration providers simply cannot deliver for your business.",
  builtForTitle: "Who Our EDI & API Integration Services Are Built For",
  builtForIntro:
    "If managing orders, clients, and fulfillment feels like three separate full-time jobs, your platforms are not doing enough. Our custom API integration services are built for apparel and footwear ecommerce brands, retailers, manufacturers, and wholesale businesses who handle high order volumes and need their systems working together without any manual work in between.",
  builtFor: [
    {
      title: "EDI & API Integration for Apparel Order Management",
      body:
        "Apparel businesses manage high order volumes across multiple platforms and retail partners. We connect your warehouse, inventory, and ecommerce systems so apparel order fulfillment stays accurate, retail partner requirements are met automatically, and your team stops fixing errors that should never happen.",
    },
    {
      title: "EDI & API Integration for Footwear Fulfillment Operations",
      body:
        "Footwear businesses need their systems talking to each other at every stage. We build integrations that keep your inventory, orders, and shipping platforms in sync so your footwear supply chain runs without manual steps, missed syncs, or delayed dispatches.",
    },
  ],
  resultsTitle: "Results Our EDI & API Integration Solutions Have Delivered",
  resultsBody:
    "A broken integration shows up in delayed orders, lost clients, and work your team should never handle. Our clients see faster order processing, fewer errors, and less manual work after their supply chain data integration and EDI integration solutions go live.",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Ready to Connect Your Supply Chain With a Custom API Integration Solution?",
  quoteBody:
    "Every day your platforms operate separately, orders slip, clients get frustrated, and your team keeps paying the price for a problem that should have been fixed a long time ago. Our EDI & API Integration Services in Ontario, CA are built to fix exactly that. Reach out today and let Logos Logistics Distribution show you what the right API integration solutions can do.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is EDI integration and why do 3PLs need it?",
      a:
        "Your retail partners require EDI integration to exchange orders, invoices, and shipment confirmations automatically. Without proper EDI solutions in place, your team handles everything manually, errors build up, and onboarding new retail clients takes far longer than it should.",
    },
    {
      q: "How long does the full integration setup take?",
      a:
        "Most EDI integration services and API integration projects go live within two to six weeks. We give you a clear timeline from the very first conversation so your team always knows exactly what to expect and when.",
    },
    {
      q: "Can you integrate older or custom-built systems?",
      a:
        "Yes. Our API integration platform works with legacy platforms, homegrown ERP systems, and custom-built warehouse systems that were never designed to connect externally. If your system can send or receive data in any format, we can build a working connection for it.",
    },
    {
      q: "What happens if something breaks after go-live?",
      a:
        "We stay with you after go-live, covering monitoring, issue fixes, and updates as needed. Our EDI integration services and API integration support make sure your operation never sits waiting for a fix when something needs attention.",
    },
    {
      q: "What types of businesses do you work with?",
      a:
        "We serve apparel fulfillment companies, footwear businesses, retailers, manufacturers, warehouse operators, and 3PL providers with EDI solutions, API integration services, and full supply chain integration support. If your systems are not keeping up, we work with you.",
    },
  ],
};

const warehousingContent = {
  title: "Warehousing, Storage and Distribution Services in Ontario, CA",
  intro:
    "The wrong warehouse loses your inventory. The right one grows your business. Most businesses do not realize the damage until orders are late, stock is missing, and customers have already moved on. Our warehousing services in Ontario, CA are built around apparel and footwear businesses that cannot afford those kinds of setbacks. Logos Logistics Distribution keeps your supply chain moving without the headaches.",
  storageTitle: "Our Warehousing & Storage Services",
  storageIntro:
    "Wrong storage costs you more than space. It costs you time, accuracy, and orders that go out late. Our flexible warehouse storage solutions cover everything from a single pallet to a full facility floor so your inventory is always in the right place and ready to move.",
  storageServices: [
    {
      title: "Racked, Bulk, Bin & Yard Warehouse Storage",
      body:
        "Forcing every product into the same storage setup leads to damaged goods and costly mix-ups. We offer racked, bulk, bin, and yard storage inside our warehouse storage facilities so each product gets handled the right way. Better organization means faster fulfillment and fewer errors on every order that goes out the door.",
      icon: "warehouse",
    },
    {
      title: "Short-Term & Long-Term Warehouse Space",
      body:
        "Getting trapped in a long contract when your needs change is a real problem. Our warehouse storage rental works around your timeline, not ours. Use us for a short project or stay as a long-term partner. Either way, you get the space you need without unnecessary commitments or confusing terms.",
      icon: "map",
    },
    {
      title: "Overflow & Seasonal Warehouse Storage",
      body:
        "When peak season hits and your facility runs out of room, orders fall behind and customers feel it. Our overflow and seasonal clothing storage for apparel and footwear steps in fast so your operations never slow down. Space scales up when demand rises and scales back just as easily when things quiet down.",
      icon: "package",
    },
    {
      title: "Climate Controlled & Temperature Controlled Warehouse",
      body:
        "One bad storage environment can destroy a full shipment and cost you a customer you worked hard to earn. Our temperature controlled storage and climate controlled warehouse storage keep your sensitive products protected against heat and humidity every single day, so everything arrives in exactly the condition it left.",
      icon: "shield",
    },
    {
      title: "Lot Tracking & Expiration Date Management",
      body:
        "Selling expired products or losing track of lot numbers can shut a business down fast. We track every item so you always know what is in stock and when it expires. Your business stays compliant, waste goes down, and your customers stay protected. You get full visibility without carrying the burden yourself.",
      icon: "database",
    },
    {
      title: "Inventory Management & Warehouse Receiving",
      body:
        "One receiving mistake can throw off your entire inventory and take days to fix. Our apparel inventory management handles every inbound shipment carefully, updates your records in real time, and keeps everything organized and accounted for. You always know exactly what you have and where it is inside our facility.",
      icon: "check",
    },
  ],
  distributionTitle: "End-to-End Distribution Services",
  distributionIntro:
    "Slow distribution does not just delay orders. It damages your reputation and sends customers straight to your competition. Our warehousing and distribution services cover the full journey from storage to final delivery, keeping your supply chain moving without gaps or surprises.",
  distributionServices: [
    {
      title: "Drayage Services",
      body:
        "Containers sitting at the port pile up fees and throw your whole schedule off. Our drayage services pull your containers directly from the port and move them straight into our facility. Your freight gets off the dock fast and into organized storage without hold-ups or extra charges eating into your margins.",
      icon: "truck",
    },
    {
      title: "Freight Consolidation & LTL Shipping",
      body:
        "Paying for a full truck on a partial load is money that should stay in your pocket. Our freight consolidation combines your shipments with others heading the same direction so you only pay for the space you use. LTL shipping through us cuts costs without adding days to your delivery times.",
      icon: "route",
    },
    {
      title: "Retail & Wholesale Distribution",
      body:
        "A single labeling mistake can turn a smooth delivery into a refused shipment. We manage apparel warehousing and footwear wholesale distribution so your products arrive on time, properly labeled, and shelf-ready. Your vendor relationships stay strong and your brand stays protected.",
      icon: "check",
    },
    {
      title: "Same-Day & Next-Day Local Delivery",
      body:
        "One late delivery can undo weeks of good service in a single moment. Our same-day and next-day local delivery gets your orders there when your customers expect them. Scheduled route or last-minute urgent order, every run is built around one thing above everything else: reliability.",
      icon: "swap",
    },
  ],
  industriesTitle: "Industries We Serve for Warehousing services",
  industriesIntro:
    "We offer warehouse storage solutions for e-commerce brands, retailers, manufacturers, and wholesalers. Whether you need fast order fulfillment, shelf-ready delivery, bulk inventory storage, or cross-dock services, our warehousing and distribution services are built to keep your products moving on time. From receiving to final delivery, we handle it all under one roof.",
  industries: [
    {
      title: "Warehousing & Distribution for the Apparel Industry",
      body:
        "Apparel businesses cannot afford misplaced stock or delayed shipments. Our apparel warehousing keeps every product in the right place, every replenishment on schedule, and every order leaving accurately no matter the season or volume.",
    },
    {
      title: "Storage and Distribution Solutions for Footwear Suppliers",
      body:
        "Footwear stock needs more than just shelf space. Our storage process keeps footwear wholesale inventory protected, accurately tracked, and dispatched to the right destination without delays or mix-ups.",
    },
  ],
  processTitle: "How Our Warehousing Process Works",
  process: [
    "Onboarding a new logistics partner should be straightforward. We take time to understand your products, volumes, and delivery requirements so your setup is fully configured before the first shipment arrives. Every inbound load is checked, counted, and placed accurately within our facility.",
    "From there, you gain real-time inventory visibility across your stock. Our storage and distribution services ensure orders are dispatched on time, every day, keeping your supply chain running without disruption.",
  ],
  locationTitle: "Why Ontario, CA Is the Smartest Distribution Base in the Western U.S.",
  location: [
    "Location decides how fast your orders move and how much each shipment costs. Ontario, CA sits at the center of Southern California's busiest logistics corridor, giving businesses direct access to the Port of Long Beach, major freeways, and rail connections.",
    "From our distribution warehouse, you can reach the entire West Coast faster and at lower freight costs than almost any other location in the region. If West Coast distribution matters to your business, this is where your inventory belongs.",
  ],
  testimonialsTitle: "What Our Clients Say",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  pricingTitle: "Our Pricing Plans",
  pricingPlaceholder: "[ Add Plans Here ]",
  quoteTitle: "Get a Free Quote for Warehousing Services Today",
  quoteBody:
    "Still paying too much for storage that does not deliver results? Tell us your product type, storage volume, and shipping needs. We will send you a clear plan built around your business. No pressure, no complicated process. Just reliable warehousing, storage and distribution services in Ontario, CA from a team that does this every single day. Call us today or fill out our quick quote form to get started.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "How quickly can we get set up and start storing inventory?",
      a:
        "Most clients are fully onboarded and receive their first shipment within a few business days. We configure your storage space, receiving process, and inventory system before anything moves so there are no delays on day one.",
    },
    {
      q: "Is there a minimum storage requirement to get started?",
      a:
        "No. Our warehouse space for storage works for businesses of all sizes, from a single pallet to a full facility floor. You only pay for the space you actually use.",
    },
    {
      q: "Do you provide real-time inventory visibility?",
      a:
        "Yes. You get live access to your stock levels, inbound shipments, and order status through our warehouse storage management system. No guessing, no waiting on manual updates.",
    },
    {
      q: "Do you handle both inbound and outbound distribution?",
      a:
        "Yes. From Drayage and freight consolidation on the inbound side to same-day local delivery and retail distribution on the outbound side, our warehouse and distribution services cover the full journey under one roof.",
    },
    {
      q: "Can you manage distribution for both retail and wholesale accounts?",
      a:
        "Yes. We handle routing guide compliance, labeling, and shelf-ready delivery so your products arrive on time and your vendor relationships stay protected.",
    },
  ],
};

const crossDockContent = {
  title: "Cross Docking Services in Ontario, CA",
  intro:
    "One delayed truck can bring your whole schedule down. Our cross docking service in Ontario, CA keeps that from happening. Freight arrives at our dock, gets sorted, and moves directly onto the next outbound truck. For businesses in the apparel industry, staying on schedule is not optional. We make sure every shipment moves on time so your operation never misses a beat.",
  solutionsTitle: "Cross Docking Solutions We Provide",
  solutions: [
    "Getting freight moved quickly should not be a challenge. Our cross docking services are built around speed and accuracy for businesses managing apparel fulfillment and footwear supply chain operations where delays directly impact shelf availability and customer satisfaction.",
    "Whether you need same-day handling or scheduled transfers, we match the right service to your shipment. Every solution is designed to reduce transit time and keep your goods moving without sitting idle in a warehouse.",
  ],
  solutionCards: [
    {
      title: "Freight Consolidation Services",
      body:
        "Sending multiple small shipments separately costs more and takes longer. Our freight consolidation service brings them together into one efficient load. For apparel fulfillment companies managing inventory from multiple suppliers, this keeps shipping costs low and tracking simple.",
      icon: "package",
    },
    {
      title: "Freight Deconsolidation Services",
      body:
        "Large incoming shipments need to be broken down before final delivery. Our freight deconsolidation service receives your bulk load, sorts it by destination, and prepares each portion for accurate outbound delivery. For apparel distribution operations and retail cross docking businesses, this step keeps every order accurate and on time.",
      icon: "swap",
    },
    {
      title: "Same-Day Cross Docking",
      body:
        "When freight cannot wait, same-day cross docking is the answer. We receive your shipment and have it ready for outbound dispatch within hours. For apparel fulfillment operations running on tight retail cycles or ecommerce deadlines, same-day handling is not a luxury. It is a requirement.",
      icon: "route",
    },
  ],
  industriesTitle: "Industries We Serve",
  industriesIntro:
    "Not every industry moves freight the same way. We work with retail, e-commerce, and wholesale businesses across apparel logistics and footwear distribution, building our process around what each operation actually needs. From high-volume wholesale runs to time-sensitive restocking, we adjust to fit your freight requirements and keep everything moving on time.",
  industries: [
    {
      title: "Cross Docking for the Apparel & Garment Industry",
      body:
        "Apparel shipments run on tight retail cycles with no room for holdups. We receive, sort, and dispatch apparel logistics freight the same day so your stock reaches the right destination without sitting idle between transfers.",
    },
    {
      title: "Serving the Footwear & Distribution Industry",
      body:
        "Footwear distribution depends on accurate sorting and on-time dispatch at every stage. We manage inbound receiving and outbound transfers for footwear distribution operations so every load moves cleanly and nothing falls behind schedule.",
    },
  ],
  processTitle: "How Our Cross Docking Process Works",
  processIntro:
    "We keep it simple, fast, and fully trackable. From the moment your freight arrives to the moment it leaves, every step is handled with care and precision.",
  process: [
    {
      title: "Step 1: Freight Arrival",
      body:
        "Your shipment arrives at our cross dock facility and is checked in immediately. Every item is logged and verified against your shipment details. Apparel fulfillment and footwear businesses cannot afford inventory errors and we make sure none slip through.",
    },
    {
      title: "Step 2: Sorting by Destination",
      body:
        "Incoming freight is sorted by delivery destination, order type, or shipment priority. Businesses managing warehouse apparel across multiple retail locations or distributing footwear to different clients get complete sorting accuracy at this stage before anything moves forward.",
    },
    {
      title: "Step 3: Outbound Staging",
      body:
        "Sorted freight is transferred directly to the outbound dock area. Trucks are pre-positioned and ready to load. Apparel logistics and footwear operations running on tight schedules never wait between receiving and dispatch.",
    },
    {
      title: "Step 4: Loading and Dispatch",
      body:
        "Your freight is loaded onto outbound trucks and sent to its final destination. Every shipment is tracked from our dock to delivery so your apparel supply chain stays visible and your customers always know what to expect.",
    },
  ],
  areasTitle: "Our Cross Docking Service Areas",
  areas: [
    "We are based in Ontario, California, a major transportation hub in the Inland Empire, 35 miles east of Los Angeles. Our location puts your freight within reach of major ports, rail yards, and regional distribution networks, which means shorter transit times and lower shipping costs for every load that moves through our dock.",
    "Our cross docking services serve businesses across Rancho Cucamonga, Fontana, and Chino. If your operation depends on fast, reliable freight movement, our location works as hard as our team does.",
  ],
  whyTitle: "Why Choose Logos Logistics Distribution for Cross Docking?",
  why: [
    "Every hour your freight waits at the wrong dock is an hour your customer is not getting their order. That is lost business, lost trust, and lost time. Our cross docking services are built for businesses in the apparel retail industry, footwear distribution, and wholesale operations that depend on consistent, accurate freight movement to keep their operations running.",
    "We offer transparent pricing, trained staff, and a facility built for high-volume throughput. Accurate transfers and dependable cross dock logistics keep your supply chain moving forward. Our clients come back because we simply get it right.",
  ],
  testimonialsTitle: "Client Testimonials",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Get a Cross Docking Quote Today",
  quoteBody:
    "Every day your freight is not moving, your competition is. Delayed shipments push back deliveries, upset customers, and hurt your bottom line. Do not let that happen. Our cross docking services in Ontario, CA for apparel fulfillment companies and footwear businesses  are ready to handle your freight today. Get your cross docking quote and have a solid plan in place before your next shipment even arrives. Fast, clear, and built around your freight.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What Is Cross Docking?",
      a:
        "The cross docking meaning is straightforward. Your freight arrives at our facility, gets sorted fast, and moves straight out to its destination. We cut out the wait so your goods reach customers quicker and your costs stay lower.",
    },
    {
      q: "How does cross docking fit into my supply chain?",
      a:
        "Every delay adds cost and slows your business down. Our cross docking removes unnecessary storage stops and connects your inbound and outbound freight directly. For businesses managing an apparel supply chain, goods move faster and the operation stays on schedule.",
    },
    {
      q: "Why choose cross docking over traditional warehousing?",
      a:
        "Traditional warehousing holds your goods and adds to your costs every day. Our cross docking skips that wait entirely. Freight comes in, gets sorted, and goes straight back out. For direct to consumer apparel brands and footwear distributors, faster delivery means happier customers and lower handling costs.",
    },
    {
      q: "Do you offer 3PL cross docking services?",
      a:
        "Yes. Our 3PL cross docking handles receiving, sorting, and outbound dispatch on your behalf. No need to manage your own dock or staff. Just reliable freight movement while you focus on growing your business.",
    },
    {
      q: "What is a cross dock warehouse?",
      a:
        "Our cross dock warehouse is built for one thing, keeping your freight moving. Shipments come in, get sorted by destination, and go straight onto outbound trucks. No long-term storage, no unnecessary handling, and no wasted time sitting idle.",
    },
  ],
};

const yardContent = {
  title: "Yard Management Services in Ontario, CA",
  intro:
    "If trailers are piling up with no clear system. Drivers are waiting longer than they should. Your dock team starts every shift without knowing where anything is. This gets worse every day without the right team handling it. Logos Logistics Distribution provides yard management services in Ontario, CA that bring real structure to your yard so apparel and footwear freight moves on time and your team stays focused.",
  servicesTitle: "Yard Management Services We Offer For Apparel Industry",
  servicesIntro:
    "One misplaced trailer can hold up an entire day of apparel logistics shipments. From gate activity to dock doors and trailer positions, our yard operations management covers all of it so nothing gets missed and your freight keeps moving the right way.",
  services: [
    {
      title: "Gate Operations & Check-In",
      body:
        "Our gate team checks in every carrier, verifies their paperwork, and logs each unit as it enters or leaves your facility. Every arrival and departure is recorded so your apparel fulfillment team always has a clear and accurate picture of what is happening at your gate.",
      icon: "shield",
    },
    {
      title: "Trailer Tracking & Trailer Management",
      body:
        "Every asset in your yard has a recorded location at all times. Loaded, empty, or staged, our trailer tracking team keeps tabs on each one so your apparel distribution team always knows what is available and where to find it.",
      icon: "map",
    },
    {
      title: "Dock Scheduling & Door Assignment",
      body:
        "Unplanned dock schedules delay your entire apparel supply chain. Door assignments and carrier arrival times are coordinated before your day starts, based on load priority and warehouse flow, so your team works from a clear schedule with no surprises.",
      icon: "route",
    },
    {
      title: "Yard Storage & 24/7 Security",
      body:
        "Every piece of apparel freight between shipments gets a dedicated, secure space in our yard storage. On-site security monitors your logistics yard around the clock so every load stays safe and fully accounted for at all times.",
      icon: "warehouse",
    },
    {
      title: "Yard Spotting & Trailer Movement",
      body:
        "Each vehicle gets positioned at the right door at the right time. Our spotting team manages all trailer movement inside your facility so your apparel warehousing crew never has to wait to start their work.",
      icon: "truck",
    },
  ],
  clientsTitle: "Yard Management Clients We Serve",
  clientsIntro:
    "Your freight does not care about excuses, and neither do your customers. Retail brands, ecommerce businesses, apparel companies, manufacturers, and wholesale distributors all rely on our yard operations team to keep their freight moving on schedule. No matter how much volume your brand runs, we put a yard plan together that fits the way your apparel fulfillment business actually works.",
  clients: [
    {
      title: "Yard Support for Apparel & Clothing Brands",
      body:
        "One delayed trailer can throw off your entire apparel distribution cycle. Our yard team tracks every trailer, coordinates every dock door, and keeps your apparel warehousing running on schedule so your garment freight never sits in the wrong place at the wrong time, no matter the season or volume.",
    },
    {
      title: "Yard Management for Footwear Businesses",
      body:
        "Missed delivery windows cost footwear brands more than just time. Our team coordinates every trailer and dock door so your footwear warehousing stays organized and your footwear distribution never falls behind. From inbound shipments to outbound orders, every load moves through your yard on time without delays or congestion.",
    },
  ],
  areasTitle: "Areas We Serve",
  areasBody:
    "Our solutions for yard logistics cover businesses across Ontario, CA neighborhoods including Downtown Ontario, Ontario Ranch, Central Ontario, New Model Colony, and the Airport District. Whether you manage apparel distribution or run high-volume freight operations, we keep your yard running smoothly across every corner of Ontario and the surrounding area.",
  operationTitle: "One Partner for Your Full Logistics Operation",
  operationBody:
    "Managing separate vendors for your yard, warehouse, and fulfillment creates communication gaps that apparel brands cannot afford. Logos Logistics Distribution brings yard management, warehousing, and 3PL logistics services under one roof so accountability never gets lost. Our team links your yard directly to your receiving and shipping process so freight moves straight into your warehouse without gaps, delays, or mixed-up inventory.",
  supplyChainTitle: "Yard Management That Connects to Your Full Supply Chain",
  supplyChainBody:
    "A disconnected yard and warehouse means delayed shipments and inaccurate inventory counts that directly impact your apparel customers. Our team links your warehouse yard management to your receiving and shipping process so freight moves straight into your warehouse without gaps, delays, or mixed up inventory counts.",
  whyTitle: "Why Businesses Choose Logos Logistics Distribution For Yard Management",
  why: [
    "Missing gate records, untracked trailers, and unclear ownership turn small yard problems into expensive supply chain failures. Businesses choose us because we put the right team in place from day one.",
    "Every gate check-in, every security check, every cargo move is handled with full ownership. With warehousing, fulfillment, and yard management all under one roof, you work with one team from start to finish, no confusion about who is responsible for what.",
    "We serve apparel and footwear brands specifically. Unlike large generic 3PLs, our yard operations are built around the seasonal spikes, high-volume freight, and time-sensitive shipments that clothing and footwear businesses face every day.",
  ],
  testimonialsTitle: "Client testimonials",
  testimonialsPlaceholder: "[ Add relevant testimonials here]",
  quoteTitle: "Get a Free Yard Management Quote in Ontario, CA",
  quoteBody:
    "Every day your yard runs without a real system is a day your apparel or footwear freight falls behind schedule. Contact Logos Logistics Distribution today for yard management services in Ontario, CA. Tell us about your freight volume and where your garment logistics are slowing down. We will put together a clear quote based on your actual needs.",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What does yard management mean in logistics?",
      a:
        "Yard management in logistics covers gate check-ins, trailer tracking, dock scheduling, spotting, and security. It keeps your freight moving smoothly between carriers and your warehouse floor every day without bottlenecks or lost loads.",
    },
    {
      q: "How do yard management services help reduce delays?",
      a:
        "Tracked trailers, planned dock door assignments, and fast gate processing eliminate the daily holdups that push fulfillment behind schedule. When every move is coordinated in advance, your team works from a clear plan instead of reacting to problems.",
    },
    {
      q: "Do you specialize in the apparel and footwear industry?",
      a:
        "Yes. Our yard management services are built specifically for apparel and footwear companies managing high-volume freight, seasonal spikes, and time-sensitive shipments that cannot afford delays or disorganized yard operations.",
    },
    {
      q: "Do you work with facilities of different sizes?",
      a:
        "Yes. Whether you have 10 dock doors or more than 50, we build a yard management plan that fits your freight volume and the way your team actually works.",
    },
    {
      q: "Can your team work with our existing warehouse management system?",
      a:
        "Yes. We work alongside your current systems so cargo status, door times, and inventory data stay accurate and up to date without disrupting your existing workflow.",
    },
    {
      q: "What makes Logos Logistics different from other yard management providers?",
      a:
        "We focus exclusively on apparel and footwear logistics. Our yard management reduces traffic buildup, speeds up turnaround times, and connects directly to your warehousing and fulfillment process so your freight always has a clear path forward and one team is accountable for all of it.",
    },
  ],
};

const internalPages = [
  {
    slug: "3pl-solutions",
    label: "3PL Solutions",
    title: threePlContent.title,
    body: threePlContent.intro,
    image: "warehouse-operations.webp",
    kind: "3pl",
  },
  ...source.services.map((service) => ({
    slug: service.slug,
    label: service.navLabel,
    title:
      service.slug === "e-commerce-fulfillment"
        ? ecommerceContent.title
        : service.slug === "inbound-outbound"
          ? inboundContent.title
          : service.slug === "warehousing-distribution"
            ? warehousingContent.title
          : service.slug === "cross-docking"
            ? crossDockContent.title
            : service.slug === "transloading"
              ? transloadContent.title
              : service.slug === "value-added-services"
                ? valueAddedContent.title
                : service.slug === "edi-api-integrations"
                  ? ediApiContent.title
        : service.slug === "yard-management"
          ? yardContent.title
          : service.title,
    body:
      service.slug === "e-commerce-fulfillment"
        ? ecommerceContent.intro
        : service.slug === "inbound-outbound"
          ? inboundContent.intro.join(" ")
          : service.slug === "warehousing-distribution"
            ? warehousingContent.intro
          : service.slug === "cross-docking"
            ? crossDockContent.intro
            : service.slug === "transloading"
              ? transloadContent.intro
              : service.slug === "value-added-services"
                ? valueAddedContent.intro
                : service.slug === "edi-api-integrations"
                  ? ediApiContent.intro
        : service.slug === "yard-management"
          ? yardContent.intro
          : service.body,
    image: service.image,
    kind:
      service.slug === "e-commerce-fulfillment"
        ? "ecommerce"
        : service.slug === "inbound-outbound"
          ? "inbound"
          : service.slug === "warehousing-distribution"
            ? "warehousing"
          : service.slug === "cross-docking"
            ? "crossDock"
            : service.slug === "transloading"
              ? "transload"
              : service.slug === "value-added-services"
                ? "valueAdded"
                : service.slug === "edi-api-integrations"
                  ? "ediApi"
        : service.slug === "yard-management"
          ? "yard"
          : "service",
    service,
  })),
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function icon(name) {
  const common =
    'viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
  const paths = {
    warehouse:
      '<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-7h10v7"/><path d="M9 11h6"/><path d="M12 4v7"/>',
    package:
      '<path d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5z"/><path d="M3.3 8.7 12 14l8.7-5.3"/><path d="M12 14v7"/>',
    truck:
      '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    swap:
      '<path d="M7 7h11l-3-3"/><path d="M17 17H6l3 3"/><path d="M18 7l-3 3"/><path d="M6 17l3-3"/>',
    database:
      '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    map:
      '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    check:
      '<path d="M20 6 9 17l-5-5"/><path d="M4 20h16"/><path d="M4 4h12"/>',
    route:
      '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h4a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8"/>',
    shield:
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/>',
    arrow:
      '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  };
  return `<svg ${common}>${paths[name] || paths.arrow}</svg>`;
}

function pageShell({ title, description, active, body, pageClass = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="source-heading" content="${esc(source.metaLabel)}">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=20260515-ui-polish">
</head>
<body class="${pageClass}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${siteHeader(active)}
  <main id="main">
${body}
  </main>
  ${siteFooter()}
  <script src="app.js" defer></script>
</body>
</html>
`;
}

function siteHeader(active) {
  const nav = navItems
    .map((item) => {
      const current = active === item.href ? ' aria-current="page"' : "";
      return `<a${current} href="${item.href}">${esc(item.label)}</a>`;
    })
    .join("");
  const menuCards = navItems
    .filter((item) => item.label !== "Home")
    .map(
      (item) => `<a href="${item.href}" class="mega-card">
        <span>${esc(item.label)}</span>
        <small>${item.label === "3PL Solutions" ? "Full logistics architecture" : "Operational service page"}</small>
      </a>`,
    )
    .join("");
  return `<header class="site-header">
    <div class="topline">
      <div class="container topline-inner">
        <span>Ontario, CA 3PL warehouse and distribution</span>
        <a href="tel:${brand.phone.replaceAll("-", "")}">Call ${brand.phone}</a>
      </div>
    </div>
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="${esc(brand.name)} home">
        <img src="assets/logo.png" alt="${esc(brand.name)} logo">
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a${active === "index.html" ? ' aria-current="page"' : ""} href="index.html">Home</a>
        <div class="mega">
          <button type="button" class="mega-trigger" aria-expanded="false">
            3PL Solutions
            <span>${icon("arrow")}</span>
          </button>
          <div class="mega-panel" aria-label="3PL Solutions menu">
            <div class="mega-copy">
              <strong>Service architecture</strong>
              <p>Warehousing, fulfillment, cross dock, yard management, and EDI/API workflows organized for operational buyers.</p>
            </div>
            <div class="mega-grid">${menuCards}</div>
          </div>
        </div>
      </nav>
      <a class="nav-cta" href="#quote">Request Quote</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <div class="container">
        ${nav}
        <a class="mobile-cta" href="#quote">Request Quote</a>
      </div>
    </div>
  </header>`;
}

function siteFooter() {
  const links = navItems.map((item) => `<a href="${item.href}">${esc(item.label)}</a>`).join("");
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="footer-brand" href="index.html">
          <img src="assets/logo-white.webp" alt="${esc(brand.name)} logo">
        </a>
        <p>Your trusted partner for all your warehousing, logistics, and supply chain needs.</p>
      </div>
      <div>
        <h2>Navigation</h2>
        <div class="footer-links">${links}</div>
      </div>
      <div>
        <h2>Contact</h2>
        <ul class="contact-list">
          <li><a href="tel:${brand.phone.replaceAll("-", "")}">${brand.phone}</a></li>
          <li><a href="mailto:${brand.email}">${brand.email}</a></li>
          <li>${brand.address}</li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>&copy; 2026 ${esc(brand.name)}. All Rights Reserved.</span>
      <a href="#main">Back to top</a>
    </div>
  </footer>`;
}

function sectionIntro(kicker, title, body) {
  return `<div class="section-intro reveal">
    <span class="eyebrow">${esc(kicker)}</span>
    <h2>${esc(title)}</h2>
    ${body ? `<p>${esc(body)}</p>` : ""}
  </div>`;
}

function serviceCards() {
  return `<div class="service-grid">
    ${source.services
      .map(
        (service) => `<article class="service-card reveal">
          <div class="service-icon">${icon(service.icon)}</div>
          <div>
            <h3>${esc(service.title)}</h3>
            <p>${esc(service.body)}</p>
          </div>
          <div class="card-proof">${esc(service.proof)}</div>
          <a href="${service.slug}.html" class="text-link">Study capability ${icon("arrow")}</a>
        </article>`,
      )
      .join("")}
  </div>`;
}

function homepage() {
  const body = `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">Southern California 3PL operations</span>
          <h1>${esc(source.heroTitle)}</h1>
          <p>${esc(source.heroBody)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Request a 3PL quote</a>
            <a class="btn secondary" href="#services">Explore services</a>
          </div>
          <div class="proof-chips" aria-label="Operational proof">
            <span>Ontario, CA</span>
            <span>Warehousing</span>
            <span>Fulfillment</span>
            <span>EDI/API ready</span>
          </div>
        </div>
        <div class="hero-visual reveal">
          <img src="assets/warehouse-operations.webp" alt="Warehouse operations with cartons and racking">
          <div class="ops-panel">
            <span>Live operations view</span>
            <strong>Orders, inventory, docks, and dispatch moving in one accountable flow.</strong>
            <div class="panel-grid">
              <small>Receiving</small><small>Storage</small><small>Pick Pack</small><small>Delivery</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="kpi-band" aria-label="Logistics proof points">
      <div class="container kpi-grid">
        <div class="kpi"><strong>3PL</strong><span>Warehouse in Ontario CA</span></div>
        <div class="kpi"><strong>EDI/API</strong><span>Inventory and order synchronization</span></div>
        <div class="kpi"><strong>Same-day</strong><span>Cross dock priority movement</span></div>
        <div class="kpi"><strong>B2B</strong><span>Apparel, footwear, ecommerce, retail</span></div>
      </div>
    </section>

    <section id="services" class="section light">
      <div class="container">
        ${sectionIntro("What Logos does", source.servicesTitle, source.servicesIntro)}
        ${serviceCards()}
      </div>
    </section>

    <section class="section process-section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Operational process</span>
          <h2>${esc(source.processTitle)}</h2>
          <p>${esc(source.processIntro)}</p>
          <a class="btn primary compact" href="3pl-solutions.html">View 3PL Solutions</a>
        </div>
        <div class="process-list">
          ${source.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Ontario CA freight corridor</span>
          <h2>${esc(source.locationTitle)}</h2>
          <p>${esc(source.locationBody)}</p>
        </div>
        <div class="map-card reveal" aria-label="Southern California logistics map">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario CA</span>
          <span class="pin port">LA / Long Beach</span>
          <span class="pin west">Western US</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/yard-storage.webp" alt="Secure outdoor yard storage">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why choose Logos</span>
          <h2>${esc(source.whyTitle)}</h2>
          ${source.whyParagraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
          <div class="trust-metrics">
            <span><strong>Clear systems</strong> Receiving to final delivery</span>
            <span><strong>Live visibility</strong> Stock and shipment status</span>
            <span><strong>Flexible storage</strong> Built around actual volume</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", source.industriesTitle, source.industriesIntro)}
        <div class="industry-grid">
          ${source.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Technology-enabled logistics</span>
          <h2>Inventory, orders, and dock movement with connected visibility</h2>
          <p>${esc(source.services.find((item) => item.slug === "edi-api-integrations").body)}</p>
          <a class="btn secondary light-btn" href="edi-api-integrations.html">Explore EDI & API Integrations</a>
        </div>
        <div class="dashboard reveal" aria-label="Logistics technology UI reference">
          <div class="dash-header"><span></span><strong>Operations console</strong><small>Live</small></div>
          <div class="dash-row"><span>Orders synced</span><strong>On schedule</strong></div>
          <div class="dash-row"><span>Inventory checks</span><strong>Accurate</strong></div>
          <div class="dash-row"><span>Dock appointments</span><strong>Ready</strong></div>
          <div class="dash-row"><span>Shipment visibility</span><strong>Active</strong></div>
        </div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Trust-building proof</span>
          <h2>${esc(source.testimonialsTitle)}</h2>
          <p>${esc(source.testimonialsBody)}</p>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(source.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Conversion path</span>
          <h2>${esc(source.quoteTitle)}</h2>
          <p>${esc(source.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a logistics quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Monthly order volume<input type="text" placeholder="Example: 2,500 orders"></label>
          <label>Primary need<select><option>Warehousing & Distribution</option><option>E-Commerce Fulfillment</option><option>Cross Docking</option><option>EDI & API Integrations</option></select></label>
          <button type="submit" class="btn primary">Request Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Answers for buyers", source.faqTitle, "")}
        <div class="faq-list">
          ${source.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
  return pageShell({
    title: source.metaTitle,
    description: source.heroBody,
    active: "index.html",
    pageClass: "home-page",
    body,
  });
}

function relatedServices(currentSlug) {
  return source.services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3)
    .map(
      (service) => `<a class="related-card reveal" href="${service.slug}.html">
        <span>${icon(service.icon)}</span>
        <strong>${esc(service.title)}</strong>
        <small>${esc(service.proof)}</small>
      </a>`,
    )
    .join("");
}

function internalPage(page) {
  if (page.kind === "3pl") return threePlPage(page);
  if (page.kind === "ecommerce") return ecommercePage(page);
  if (page.kind === "inbound") return inboundPage(page);
  if (page.kind === "warehousing") return warehousingPage(page);
  if (page.kind === "crossDock") return crossDockPage(page);
  if (page.kind === "transload") return transloadPage(page);
  if (page.kind === "valueAdded") return valueAddedPage(page);
  if (page.kind === "ediApi") return ediApiPage(page);
  if (page.kind === "yard") return yardPage(page);

  const overview = page.kind === "overview";
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">${overview ? "Complete 3PL architecture" : "Operational capability"}</span>
          <h1>${esc(page.title)}</h1>
          <p>${esc(page.body)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Request Quote</a>
            <a class="btn secondary" href="index.html#services">Back to service grid</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/${esc(page.image)}" alt="${esc(page.label)} logistics reference">
        </figure>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${overview ? sectionIntro("Service system", source.servicesTitle, source.servicesIntro) : sectionIntro("Service detail", page.title, page.body)}
        ${overview ? serviceCards() : `<div class="detail-grid">
          <article class="detail-card reveal">
            <div class="service-icon">${icon(page.service.icon)}</div>
            <h2>${esc(page.service.title)}</h2>
            <p>${esc(page.service.body)}</p>
            <span>${esc(page.service.proof)}</span>
          </article>
          <aside class="detail-aside reveal">
            <h2>Operational fit</h2>
            <ul>
              <li>E-commerce brands</li>
              <li>Shopify/Amazon sellers</li>
              <li>Apparel brands</li>
              <li>Importers</li>
              <li>Manufacturers</li>
              <li>Retail/distribution companies</li>
            </ul>
          </aside>
        </div>`}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">How it works</span>
          <h2>${esc(source.processTitle)}</h2>
          <p>${esc(source.processIntro)}</p>
        </div>
        <div class="process-list">
          ${source.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Connected operations</span>
          <h2>${esc(source.whyTitle)}</h2>
          ${source.whyParagraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard reveal" aria-label="Operations dashboard reference">
          <div class="dash-header"><span></span><strong>Logistics status</strong><small>Active</small></div>
          <div class="dash-row"><span>Inventory</span><strong>Visible</strong></div>
          <div class="dash-row"><span>Receiving</span><strong>Coordinated</strong></div>
          <div class="dash-row"><span>Fulfillment</span><strong>Moving</strong></div>
          <div class="dash-row"><span>Delivery</span><strong>Scheduled</strong></div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Build a complete 3PL operating system around this service", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "")}</div>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Request pricing</span>
          <h2>${esc(source.quoteTitle)}</h2>
          <p>${esc(source.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a logistics quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Primary service<input type="text" value="${esc(page.label)}"></label>
          <label>Timeline<select><option>Need support this month</option><option>Planning next quarter</option><option>Exploring options</option></select></label>
          <button type="submit" class="btn primary">Request Quote</button>
        </form>
      </div>
    </section>
  `;

  return pageShell({
    title: `${page.label} | ${source.metaTitle}`,
    description: page.body,
    active: `${page.slug}.html`,
    pageClass: "inner-page",
    body,
  });
}

async function write(file, content) {
  await fs.writeFile(path.join(outDir, file), content, "utf8");
}

function ecommercePage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA ecommerce fulfillment</span>
          <h1>${esc(ecommerceContent.title)}</h1>
          <p>${esc(ecommerceContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Start Fulfillment Quote</a>
            <a class="btn secondary" href="#solutions">View Fulfillment Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/apparel-fulfillment.webp" alt="E-commerce fulfillment operations for apparel orders">
        </figure>
      </div>
    </section>

    <section id="solutions" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Apparel ecommerce logistics</span>
          <h2>${esc(ecommerceContent.solutionsTitle)}</h2>
          ${ecommerceContent.solutions.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="service-grid">
          ${ecommerceContent.services
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Shopify and marketplace sync</span>
          <h2>${esc(ecommerceContent.integrationsTitle)}</h2>
          ${ecommerceContent.integrations.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard reveal" aria-label="E-commerce integration dashboard">
          <div class="dash-header"><span></span><strong>Fulfillment channel sync</strong><small>Connected</small></div>
          <div class="dash-row"><span>Shopify orders</span><strong>Synced</strong></div>
          <div class="dash-row"><span>Marketplace stock</span><strong>Updated</strong></div>
          <div class="dash-row"><span>Apparel logistics</span><strong>Coordinated</strong></div>
          <div class="dash-row"><span>Customer delivery</span><strong>Tracked</strong></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Fulfillment workflow</span>
          <h2>${esc(ecommerceContent.processTitle)}</h2>
          <p>${esc(ecommerceContent.processIntro)}</p>
        </div>
        <div class="process-list">
          ${ecommerceContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Southern California coverage</span>
          <h2>${esc(ecommerceContent.areasTitle)}</h2>
          <p>${esc(ecommerceContent.areasBody)}</p>
        </div>
        <div class="map-card reveal" aria-label="E-commerce fulfillment service areas">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Rancho Cucamonga</span>
          <span class="pin west">Riverside</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/fashion-scale.webp" alt="Apparel ecommerce brand fulfillment">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why brands choose Logos</span>
          <h2>${esc(ecommerceContent.whyTitle)}</h2>
          ${ecommerceContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", ecommerceContent.industriesTitle, ecommerceContent.industriesIntro)}
        <div class="industry-grid">
          ${ecommerceContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Fulfillment outcomes</span>
          <h2>${esc(ecommerceContent.resultsTitle)}</h2>
          <p>${esc(ecommerceContent.resultsBody)}</p>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <h2>${esc(ecommerceContent.testimonialsTitle)}</h2>
          <p>${esc(ecommerceContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">E-commerce quote</span>
          <h2>${esc(ecommerceContent.quoteTitle)}</h2>
          <p>${esc(ecommerceContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request an e-commerce fulfillment quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Store platform<select><option>Shopify</option><option>Amazon</option><option>Marketplace</option><option>Other ecommerce platform</option></select></label>
          <label>Fulfillment need<select><option>Pick & Pack Services</option><option>E-Commerce Shipping Solutions</option><option>Returns Management</option><option>Inventory Tracking</option></select></label>
          <button type="submit" class="btn primary">Contact Us Today</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Fulfillment questions", ecommerceContent.faqTitle, "")}
        <div class="faq-list">
          ${ecommerceContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${ecommerceContent.title} | ${brand.name}`,
    description: ecommerceContent.intro,
    active: "e-commerce-fulfillment.html",
    pageClass: "inner-page ecommerce-page",
    body,
  });
}

function inboundPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA inbound and outbound logistics</span>
          <h1>${esc(inboundContent.title)}</h1>
          ${inboundContent.intro.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Optimize Logistics</a>
            <a class="btn secondary" href="#inbound-services">Review Logistics Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/warehouse-team.webp" alt="Inbound and outbound logistics coordination for apparel brands">
        </figure>
      </div>
    </section>

    <section id="inbound-services" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Inbound freight control</span>
          <h2>${esc(inboundContent.inboundTitle)}</h2>
          <p>${esc(inboundContent.inboundBody)}</p>
        </div>
        <div class="service-grid two-card-grid">
          ${inboundContent.inboundServices
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Outbound dispatch</span>
          <h2>${esc(inboundContent.outboundTitle)}</h2>
          <p>${esc(inboundContent.outboundBody)}</p>
        </div>
        <div class="service-grid two-card-grid">
          ${inboundContent.outboundServices
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", inboundContent.industriesTitle, inboundContent.industriesIntro)}
        <div class="industry-grid">
          ${inboundContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Operational benefits</span>
          <h2>${esc(inboundContent.benefitsTitle)}</h2>
          <p>${esc(inboundContent.benefitsBody)}</p>
        </div>
        <div class="dashboard reveal" aria-label="Inbound and outbound logistics dashboard">
          <div class="dash-header"><span></span><strong>Shipment control</strong><small>Live</small></div>
          <div class="dash-row"><span>Inbound arrivals</span><strong>Scheduled</strong></div>
          <div class="dash-row"><span>Receiving accuracy</span><strong>Verified</strong></div>
          <div class="dash-row"><span>Inventory flow</span><strong>Balanced</strong></div>
          <div class="dash-row"><span>Outbound dispatch</span><strong>Tracked</strong></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Logistics process</span>
          <h2>${esc(inboundContent.processTitle)}</h2>
        </div>
        <div class="process-list">
          ${inboundContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Southern California logistics hub</span>
          <h2>${esc(inboundContent.areasTitle)}</h2>
          ${inboundContent.areas.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="map-card reveal" aria-label="Inbound and outbound logistics service areas">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Rancho Cucamonga</span>
          <span class="pin west">Fontana</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/warehouse-operations.webp" alt="Warehouse receiving and outbound dispatch operations">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why choose Logos</span>
          <h2>${esc(inboundContent.whyTitle)}</h2>
          ${inboundContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect inbound and outbound logistics with the full 3PL system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "inbound-outbound")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(inboundContent.testimonialsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(inboundContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Free consultation</span>
          <h2>${esc(inboundContent.quoteTitle)}</h2>
          <p>${esc(inboundContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request an inbound and outbound logistics consultation">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Primary logistics need<select><option>Inbound Freight & Freight Receiving</option><option>Inventory Replenishment & Material Handling</option><option>Outbound Logistics in Supply Chain Management</option><option>Apparel & Footwear Product Flow Management</option></select></label>
          <label>Business type<select><option>Apparel brand</option><option>Garment manufacturer</option><option>Clothing distributor</option><option>Footwear distributor</option></select></label>
          <button type="submit" class="btn primary">Get Free Consultation</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Inbound and outbound answers", inboundContent.faqTitle, "")}
        <div class="faq-list">
          ${inboundContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${inboundContent.title} | ${brand.name}`,
    description: inboundContent.intro.join(" "),
    active: "inbound-outbound.html",
    pageClass: "inner-page inbound-page",
    body,
  });
}

function transloadPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA cargo transfer</span>
          <h1>${esc(transloadContent.title)}</h1>
          <p>${esc(transloadContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Get Free Quote</a>
            <a class="btn secondary" href="#transload-services">Review Transload Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/yard-storage.webp" alt="Transloading cargo transfer yard near Ontario California">
        </figure>
      </div>
    </section>

    <section id="transload-services" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Container to truck transfer</span>
          <h2>${esc(transloadContent.servicesTitle)}</h2>
          <p>${esc(transloadContent.servicesIntro)}</p>
        </div>
        <div class="service-grid three-card-grid">
          ${transloadContent.services
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Transfer visibility</span>
          <h2>Cargo transfer visibility</h2>
          <p>${esc(transloadContent.processIntro)}</p>
        </div>
        <div class="dashboard reveal" aria-label="Transloading operation dashboard">
          <div class="dash-header"><span></span><strong>Transload status</strong><small>Coordinated</small></div>
          <div class="dash-row"><span>Drayage pickup</span><strong>Scheduled</strong></div>
          <div class="dash-row"><span>Cargo inspection</span><strong>Documented</strong></div>
          <div class="dash-row"><span>Palletizing</span><strong>Processed</strong></div>
          <div class="dash-row"><span>LTL / FTL dispatch</span><strong>Ready</strong></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Transload workflow</span>
          <h2>${esc(transloadContent.processTitle)}</h2>
          <p>${esc(transloadContent.processIntro)}</p>
        </div>
        <div class="process-list">
          ${transloadContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Port, rail, and truck access</span>
          <h2>${esc(transloadContent.areasTitle)}</h2>
          <p>${esc(transloadContent.areasBody)}</p>
        </div>
        <div class="map-card reveal" aria-label="Transload service areas in Ontario California">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Airport District</span>
          <span class="pin west">Ontario Ranch</span>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", transloadContent.industriesTitle, transloadContent.industriesIntro)}
        <div class="industry-grid">
          ${transloadContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/warehouse-operations.webp" alt="Transloading warehouse cargo processing operation">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why choose Logos</span>
          <h2>${esc(transloadContent.whyTitle)}</h2>
          ${transloadContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container detail-grid">
        <article class="detail-card reveal">
          <div class="service-icon">${icon("check")}</div>
          <h2>${esc(transloadContent.pricingTitle)}</h2>
          <p>${esc(transloadContent.pricingBody)}</p>
        </article>
        <aside class="detail-aside reveal">
          <h2>Transload fit</h2>
          <ul>
            <li>Rail to truck cargo transfer</li>
            <li>Ship to truck container freight</li>
            <li>Overweight container support</li>
            <li>Same-day container turns</li>
            <li>Short-term freight holding</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect transloading with the full 3PL operating system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "transloading")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(transloadContent.testimonialsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(transloadContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Transloading quote</span>
          <h2>${esc(transloadContent.quoteTitle)}</h2>
          <p>${esc(transloadContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a transloading quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Transload need<select><option>Container Unloading and Unloading Inspection</option><option>Floor-Load to Pallet Conversion</option><option>Overweight Container Transloading</option><option>Same-Day Container Turns</option></select></label>
          <label>Outbound mode<select><option>LTL dispatch</option><option>FTL dispatch</option><option>Rail to truck</option><option>Ship to truck</option></select></label>
          <button type="submit" class="btn primary">Get Free Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Transloading answers", transloadContent.faqTitle, "")}
        <div class="faq-list">
          ${transloadContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${transloadContent.title} | ${brand.name}`,
    description: transloadContent.intro,
    active: "transloading.html",
    pageClass: "inner-page transload-page",
    body,
  });
}

function valueAddedPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA value-added 3PL</span>
          <h1>${esc(valueAddedContent.title)}</h1>
          <p>${esc(valueAddedContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Get Custom Quote</a>
            <a class="btn secondary" href="#value-added-services">Review Value-Added Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/fashion-scale.webp" alt="Value-added apparel and footwear fulfillment services">
        </figure>
      </div>
    </section>

    <section id="value-added-services" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Retail-ready fulfillment</span>
          <h2>${esc(valueAddedContent.servicesTitle)}</h2>
          <p>${esc(valueAddedContent.servicesIntro)}</p>
        </div>
        <div class="service-grid three-card-grid">
          ${valueAddedContent.services
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Ontario fulfillment capacity</span>
          <h2>${esc(valueAddedContent.locationTitle)}</h2>
          ${valueAddedContent.location.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="map-card reveal" aria-label="Value-added service area in Ontario California">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Southern CA</span>
          <span class="pin west">Major carriers</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Warehouse workflow</span>
          <h2>${esc(valueAddedContent.processTitle)}</h2>
          <p>${esc(valueAddedContent.processIntro)}</p>
        </div>
        <div class="process-list">
          ${valueAddedContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Operational benefits</span>
          <h2>${esc(valueAddedContent.benefitsTitle)}</h2>
          ${valueAddedContent.benefits.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard reveal" aria-label="Value-added warehouse service dashboard">
          <div class="dash-header"><span></span><strong>Value-added workflow</strong><small>Active</small></div>
          <div class="dash-row"><span>Labeling</span><strong>Compliant</strong></div>
          <div class="dash-row"><span>Kitting</span><strong>Accurate</strong></div>
          <div class="dash-row"><span>Repackaging</span><strong>Retail-ready</strong></div>
          <div class="dash-row"><span>Visibility</span><strong>Updated</strong></div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", valueAddedContent.industriesTitle, valueAddedContent.industriesIntro)}
        <div class="industry-grid">
          ${valueAddedContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/apparel-fulfillment.webp" alt="Retail-ready value-added apparel fulfillment operation">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why brands choose Logos</span>
          <h2>${esc(valueAddedContent.whyTitle)}</h2>
          ${valueAddedContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container detail-grid">
        <article class="detail-card reveal">
          <div class="service-icon">${icon("check")}</div>
          <h2>${esc(valueAddedContent.pricingTitle)}</h2>
          <p>${esc(valueAddedContent.pricingBody)}</p>
        </article>
        <aside class="detail-aside reveal">
          <h2>Value-added fit</h2>
          <ul>
            <li>Custom labeling</li>
            <li>Retail compliance</li>
            <li>Repackaging and ticketing</li>
            <li>Kitting and assembly</li>
            <li>Seasonal volume support</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect value-added services with the full 3PL operating system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "value-added-services")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Value-added outcomes</span>
          <h2>${esc(valueAddedContent.resultsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(valueAddedContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Custom quote</span>
          <h2>${esc(valueAddedContent.quoteTitle)}</h2>
          <p>${esc(valueAddedContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a value-added services quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Value-added need<select><option>Custom Labeling & Retail Compliance Services</option><option>Repackaging, Ticketing & Packaging Solutions</option><option>Kitting & Assembly for eCommerce Brands</option><option>Seasonal volume support</option></select></label>
          <label>Monthly volume<select><option>Under 1,000 units</option><option>1,000-10,000 units</option><option>10,000+ units</option></select></label>
          <button type="submit" class="btn primary">Get Custom Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Value-added answers", valueAddedContent.faqTitle, "")}
        <div class="faq-list">
          ${valueAddedContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${valueAddedContent.title} | ${brand.name}`,
    description: valueAddedContent.intro,
    active: "value-added-services.html",
    pageClass: "inner-page value-added-page",
    body,
  });
}

function ediApiPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA logistics integrations</span>
          <h1>${esc(ediApiContent.title)}</h1>
          <p>${esc(ediApiContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Connect Your Supply Chain</a>
            <a class="btn secondary" href="#integration-solutions">Review Integrations</a>
          </div>
        </div>
        <div class="dashboard hero-dashboard reveal" aria-label="EDI and API logistics integration dashboard">
          <div class="dash-header"><span></span><strong>Integration console</strong><small>Live</small></div>
          <div class="dash-row"><span>Retail EDI</span><strong>Synced</strong></div>
          <div class="dash-row"><span>API order feed</span><strong>Connected</strong></div>
          <div class="dash-row"><span>WMS inventory</span><strong>Current</strong></div>
          <div class="dash-row"><span>Marketplace orders</span><strong>Routing</strong></div>
        </div>
      </div>
    </section>

    <section id="integration-solutions" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Connected 3PL operations</span>
          <h2>${esc(ediApiContent.solutionsTitle)}</h2>
          <p>${esc(ediApiContent.solutionsIntro)}</p>
        </div>
        <div class="service-grid">
          ${ediApiContent.solutions
            .map(
              (solution) => `<article class="service-card reveal">
                <div class="service-icon">${icon(solution.icon)}</div>
                <div>
                  <h3>${esc(solution.title)}</h3>
                  <p>${esc(solution.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Integration workflow</span>
          <h2>Clean data movement from audit to go-live</h2>
          <p>${esc(ediApiContent.processIntro)}</p>
        </div>
        <div class="dashboard reveal" aria-label="EDI and API implementation status">
          <div class="dash-header"><span></span><strong>Implementation status</strong><small>Planned</small></div>
          <div class="dash-row"><span>System audit</span><strong>Mapped</strong></div>
          <div class="dash-row"><span>Data architecture</span><strong>Designed</strong></div>
          <div class="dash-row"><span>Testing cycles</span><strong>Queued</strong></div>
          <div class="dash-row"><span>Go-live support</span><strong>Assigned</strong></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Implementation process</span>
          <h2>${esc(ediApiContent.processTitle)}</h2>
          <p>${esc(ediApiContent.processIntro)}</p>
        </div>
        <div class="process-list">
          ${ediApiContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-grid">
        <article class="detail-card reveal">
          <div class="service-icon">${icon("database")}</div>
          <h2>${esc(ediApiContent.differenceTitle)}</h2>
          <p>${esc(ediApiContent.differenceBody)}</p>
        </article>
        <aside class="detail-aside reveal">
          <h2>Integration fit</h2>
          <ul>
            <li>Retail partner EDI</li>
            <li>Warehouse and inventory sync</li>
            <li>ERP, WMS, and TMS data mapping</li>
            <li>eCommerce order routing</li>
            <li>Ongoing API support</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Built for", ediApiContent.builtForTitle, ediApiContent.builtForIntro)}
        <div class="industry-grid">
          ${ediApiContent.builtFor
            .map(
              (segment) => `<article class="industry-card reveal">
                <h3>${esc(segment.title)}</h3>
                <p>${esc(segment.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Integration outcomes</span>
          <h2>${esc(ediApiContent.resultsTitle)}</h2>
          <p>${esc(ediApiContent.resultsBody)}</p>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(ediApiContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect EDI and API integrations with the full 3PL operating system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "edi-api-integrations")}</div>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Integration consultation</span>
          <h2>${esc(ediApiContent.quoteTitle)}</h2>
          <p>${esc(ediApiContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request an EDI and API integration consultation">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Integration need<select><option>EDI Integration Solutions</option><option>API Integration Services</option><option>WMS, ERP & TMS Integration</option><option>eCommerce & Marketplace Integration</option></select></label>
          <label>Systems involved<select><option>WMS / inventory</option><option>ERP / accounting</option><option>Retail EDI</option><option>Marketplace / ecommerce</option></select></label>
          <button type="submit" class="btn primary">Reach Out Today</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Integration answers", ediApiContent.faqTitle, "")}
        <div class="faq-list">
          ${ediApiContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${ediApiContent.title} | ${brand.name}`,
    description: ediApiContent.intro,
    active: "edi-api-integrations.html",
    pageClass: "inner-page edi-api-page",
    body,
  });
}

function warehousingPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA warehousing and distribution</span>
          <h1>${esc(warehousingContent.title)}</h1>
          <p>${esc(warehousingContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Get Free Quote</a>
            <a class="btn secondary" href="#warehouse-storage">Review Storage Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/warehouse-operations.webp" alt="Warehousing storage and distribution operations in Ontario California">
        </figure>
      </div>
    </section>

    <section id="warehouse-storage" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Flexible storage</span>
          <h2>${esc(warehousingContent.storageTitle)}</h2>
          <p>${esc(warehousingContent.storageIntro)}</p>
        </div>
        <div class="service-grid three-card-grid">
          ${warehousingContent.storageServices
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Distribution coverage</span>
          <h2>${esc(warehousingContent.distributionTitle)}</h2>
          <p>${esc(warehousingContent.distributionIntro)}</p>
        </div>
        <div class="service-grid">
          ${warehousingContent.distributionServices
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Industries", warehousingContent.industriesTitle, warehousingContent.industriesIntro)}
        <div class="industry-grid">
          ${warehousingContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Warehouse process</span>
          <h2>${esc(warehousingContent.processTitle)}</h2>
          ${warehousingContent.process.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard reveal" aria-label="Warehouse inventory management dashboard">
          <div class="dash-header"><span></span><strong>Warehouse status</strong><small>Visible</small></div>
          <div class="dash-row"><span>Receiving</span><strong>Checked</strong></div>
          <div class="dash-row"><span>Storage</span><strong>Organized</strong></div>
          <div class="dash-row"><span>Inventory</span><strong>Live</strong></div>
          <div class="dash-row"><span>Distribution</span><strong>On time</strong></div>
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Western U.S. distribution base</span>
          <h2>${esc(warehousingContent.locationTitle)}</h2>
          ${warehousingContent.location.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="map-card reveal" aria-label="Ontario CA distribution base">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Port access</span>
          <span class="pin west">West Coast</span>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container detail-grid">
        <article class="detail-card reveal">
          <div class="service-icon">${icon("check")}</div>
          <h2>${esc(warehousingContent.pricingTitle)}</h2>
          <p>${esc(warehousingContent.pricingPlaceholder)}</p>
        </article>
        <aside class="detail-aside reveal">
          <h2>Warehouse fit</h2>
          <ul>
            <li>Single pallet to full floor storage</li>
            <li>Overflow and seasonal storage</li>
            <li>Climate controlled storage</li>
            <li>Inventory receiving and visibility</li>
            <li>Retail and wholesale distribution</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect warehousing and distribution with the full 3PL operating system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "warehousing-distribution")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(warehousingContent.testimonialsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(warehousingContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Warehouse quote</span>
          <h2>${esc(warehousingContent.quoteTitle)}</h2>
          <p>${esc(warehousingContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a warehousing services quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Storage need<select><option>Racked, Bulk, Bin & Yard Warehouse Storage</option><option>Short-Term & Long-Term Warehouse Space</option><option>Overflow & Seasonal Warehouse Storage</option><option>Climate Controlled & Temperature Controlled Warehouse</option></select></label>
          <label>Distribution need<select><option>Drayage Services</option><option>Freight Consolidation & LTL Shipping</option><option>Retail & Wholesale Distribution</option><option>Same-Day & Next-Day Local Delivery</option></select></label>
          <button type="submit" class="btn primary">Get Free Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Warehousing answers", warehousingContent.faqTitle, "")}
        <div class="faq-list">
          ${warehousingContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${warehousingContent.title} | ${brand.name}`,
    description: warehousingContent.intro,
    active: "warehousing-distribution.html",
    pageClass: "inner-page warehousing-page",
    body,
  });
}

function crossDockPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA cross docking</span>
          <h1>${esc(crossDockContent.title)}</h1>
          <p>${esc(crossDockContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Get Cross Docking Quote</a>
            <a class="btn secondary" href="#cross-dock-solutions">Review Cross Docking</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/warehouse-operations.webp" alt="Cross docking warehouse operation moving freight">
        </figure>
      </div>
    </section>

    <section id="cross-dock-solutions" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Fast freight transfer</span>
          <h2>${esc(crossDockContent.solutionsTitle)}</h2>
          ${crossDockContent.solutions.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="service-grid three-card-grid">
          ${crossDockContent.solutionCards
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro("Industries", crossDockContent.industriesTitle, crossDockContent.industriesIntro)}
        <div class="industry-grid">
          ${crossDockContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Cross dock flow</span>
          <h2>Dock-to-dispatch visibility</h2>
          <p>${esc(crossDockContent.processIntro)}</p>
        </div>
        <div class="dashboard reveal" aria-label="Cross docking freight flow dashboard">
          <div class="dash-header"><span></span><strong>Cross dock status</strong><small>Moving</small></div>
          <div class="dash-row"><span>Freight arrival</span><strong>Checked in</strong></div>
          <div class="dash-row"><span>Destination sort</span><strong>Verified</strong></div>
          <div class="dash-row"><span>Outbound staging</span><strong>Ready</strong></div>
          <div class="dash-row"><span>Dispatch</span><strong>Tracked</strong></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="sticky-copy reveal">
          <span class="eyebrow">Same-day movement</span>
          <h2>${esc(crossDockContent.processTitle)}</h2>
          <p>${esc(crossDockContent.processIntro)}</p>
        </div>
        <div class="process-list">
          ${crossDockContent.process
            .map(
              (step, index) => `<article class="process-step reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Inland Empire hub</span>
          <h2>${esc(crossDockContent.areasTitle)}</h2>
          ${crossDockContent.areas.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="map-card reveal" aria-label="Cross docking service areas in Ontario California">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Rancho Cucamonga</span>
          <span class="pin west">Chino</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/warehouse-team.webp" alt="High-volume cross dock logistics team handling apparel freight">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Why choose Logos</span>
          <h2>${esc(crossDockContent.whyTitle)}</h2>
          ${crossDockContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect cross docking with the full 3PL operating system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "cross-docking")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(crossDockContent.testimonialsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(crossDockContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Cross docking quote</span>
          <h2>${esc(crossDockContent.quoteTitle)}</h2>
          <p>${esc(crossDockContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a cross docking quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Cross dock need<select><option>Freight Consolidation Services</option><option>Freight Deconsolidation Services</option><option>Same-Day Cross Docking</option><option>3PL Cross Docking Services</option></select></label>
          <label>Shipment timing<select><option>Same-day transfer</option><option>Scheduled transfer</option><option>High-volume throughput</option></select></label>
          <button type="submit" class="btn primary">Get Cross Docking Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Cross docking answers", crossDockContent.faqTitle, "")}
        <div class="faq-list">
          ${crossDockContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${crossDockContent.title} | ${brand.name}`,
    description: crossDockContent.intro,
    active: "cross-docking.html",
    pageClass: "inner-page cross-dock-page",
    body,
  });
}

function yardPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA yard operations</span>
          <h1>${esc(yardContent.title)}</h1>
          <p>${esc(yardContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Get Yard Management Quote</a>
            <a class="btn secondary" href="#yard-services">Review Yard Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/yard-storage.webp" alt="Secure logistics yard management and trailer movement">
        </figure>
      </div>
    </section>

    <section id="yard-services" class="section light">
      <div class="container">
        <div class="section-intro reveal">
          <span class="eyebrow">Apparel yard control</span>
          <h2>${esc(yardContent.servicesTitle)}</h2>
          <p>${esc(yardContent.servicesIntro)}</p>
        </div>
        <div class="service-grid">
          ${yardContent.services
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro("Who we support", yardContent.clientsTitle, yardContent.clientsIntro)}
        <div class="industry-grid">
          ${yardContent.clients
            .map(
              (client) => `<article class="industry-card reveal">
                <h3>${esc(client.title)}</h3>
                <p>${esc(client.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Ontario CA coverage</span>
          <h2>${esc(yardContent.areasTitle)}</h2>
          <p>${esc(yardContent.areasBody)}</p>
        </div>
        <div class="map-card reveal" aria-label="Ontario CA yard management service areas">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Airport District</span>
          <span class="pin west">Ontario Ranch</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-grid">
        <article class="detail-card reveal">
          <div class="service-icon">${icon("warehouse")}</div>
          <h2>${esc(yardContent.operationTitle)}</h2>
          <p>${esc(yardContent.operationBody)}</p>
        </article>
        <article class="detail-card reveal">
          <div class="service-icon">${icon("route")}</div>
          <h2>${esc(yardContent.supplyChainTitle)}</h2>
          <p>${esc(yardContent.supplyChainBody)}</p>
        </article>
      </div>
    </section>

    <section class="section tech-section">
      <div class="container tech-grid">
        <div class="tech-copy reveal">
          <span class="eyebrow">Why businesses choose Logos</span>
          <h2>${esc(yardContent.whyTitle)}</h2>
          ${yardContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard reveal" aria-label="Yard management operations dashboard">
          <div class="dash-header"><span></span><strong>Yard control status</strong><small>Active</small></div>
          <div class="dash-row"><span>Gate check-in</span><strong>Recorded</strong></div>
          <div class="dash-row"><span>Trailer location</span><strong>Visible</strong></div>
          <div class="dash-row"><span>Dock doors</span><strong>Scheduled</strong></div>
          <div class="dash-row"><span>Security</span><strong>Monitored</strong></div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        ${sectionIntro("Related logistics capabilities", "Connect yard management with the full 3PL system", "")}
        <div class="related-grid">${relatedServices(page.service?.slug || "yard-management")}</div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(yardContent.testimonialsTitle)}</h2>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(yardContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Yard management quote</span>
          <h2>${esc(yardContent.quoteTitle)}</h2>
          <p>${esc(yardContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a yard management quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Freight volume<select><option>Under 25 trailers per week</option><option>25-100 trailers per week</option><option>100+ trailers per week</option></select></label>
          <label>Primary yard need<select><option>Gate Operations & Check-In</option><option>Trailer Tracking & Trailer Management</option><option>Dock Scheduling & Door Assignment</option><option>Yard Storage & 24/7 Security</option></select></label>
          <button type="submit" class="btn primary">Get a Free Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("Yard management answers", yardContent.faqTitle, "")}
        <div class="faq-list">
          ${yardContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${yardContent.title} | ${brand.name}`,
    description: yardContent.intro,
    active: "yard-management.html",
    pageClass: "inner-page yard-page",
    body,
  });
}

function threePlPage(page) {
  const body = `
    <section class="inner-hero">
      <div class="container inner-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Ontario CA third party logistics</span>
          <h1>${esc(threePlContent.title)}</h1>
          <p>${esc(threePlContent.intro)}</p>
          <div class="hero-actions">
            <a class="btn primary" href="#quote">Request Quote</a>
            <a class="btn secondary" href="#services">Review 3PL Services</a>
          </div>
        </div>
        <figure class="inner-media reveal">
          <img src="assets/${esc(page.image)}" alt="3PL warehouse operations in Ontario California">
        </figure>
      </div>
    </section>

    <section id="services" class="section light">
      <div class="container">
        ${sectionIntro("3PL service architecture", threePlContent.servicesTitle, threePlContent.servicesIntro)}
        <div class="service-grid">
          ${threePlContent.services
            .map(
              (service) => `<article class="service-card reveal">
                <div class="service-icon">${icon(service.icon)}</div>
                <div>
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.body)}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro("Industries served", threePlContent.industriesTitle, threePlContent.industriesIntro)}
        <div class="industry-grid">
          ${threePlContent.industries
            .map(
              (industry) => `<article class="industry-card reveal">
                <h3>${esc(industry.title)}</h3>
                <p>${esc(industry.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section benefit-section">
      <div class="container trust-grid">
        <div class="trust-media reveal">
          <img src="assets/fashion-scale.webp" alt="Apparel and footwear logistics support">
        </div>
        <div class="trust-copy reveal">
          <span class="eyebrow">Outsourcing benefits</span>
          <h2>${esc(threePlContent.benefitsTitle)}</h2>
          ${threePlContent.benefits.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section location-band">
      <div class="container location-grid">
        <div class="location-copy reveal">
          <span class="eyebrow">Service areas</span>
          <h2>${esc(threePlContent.areasTitle)}</h2>
          <p>${esc(threePlContent.areasBody)}</p>
        </div>
        <div class="map-card reveal" aria-label="Ontario CA logistics service area">
          <div class="map-lines"></div>
          <span class="pin ontario">Ontario</span>
          <span class="pin port">Rancho Cucamonga</span>
          <span class="pin west">Eastvale</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container tech-grid neutral-tech">
        <div class="tech-copy reveal">
          <span class="eyebrow">Provider confidence</span>
          <h2>${esc(threePlContent.whyTitle)}</h2>
          ${threePlContent.why.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
        <div class="dashboard light-dashboard reveal" aria-label="3PL operations dashboard">
          <div class="dash-header"><span></span><strong>3PL control points</strong><small>Ready</small></div>
          <div class="dash-row"><span>Inventory management</span><strong>Organized</strong></div>
          <div class="dash-row"><span>Order processing</span><strong>Timely</strong></div>
          <div class="dash-row"><span>Distribution</span><strong>Seamless</strong></div>
          <div class="dash-row"><span>Supply chain stress</span><strong>Reduced</strong></div>
        </div>
      </div>
    </section>

    <section class="section testimonial-section light">
      <div class="container quote-grid">
        <div class="quote-copy reveal">
          <span class="eyebrow">Client feedback</span>
          <h2>${esc(threePlContent.testimonialsTitle)}</h2>
          <p>${esc(threePlContent.testimonialsBody)}</p>
        </div>
        <blockquote class="testimonial-placeholder reveal">
          <p>${esc(threePlContent.testimonialsPlaceholder)}</p>
        </blockquote>
      </div>
    </section>

    <section id="quote" class="section quote-section">
      <div class="container quote-panel reveal">
        <div>
          <span class="eyebrow">Quote request</span>
          <h2>${esc(threePlContent.quoteTitle)}</h2>
          <p>${esc(threePlContent.quoteBody)}</p>
        </div>
        <form class="quote-form" aria-label="Request a 3PL services quote">
          <label>Work email<input type="email" placeholder="name@company.com"></label>
          <label>Primary business type<select><option>Apparel fulfillment</option><option>Footwear logistics</option><option>E-commerce</option><option>Retail / wholesale</option></select></label>
          <label>Service area<select><option>Ontario, CA</option><option>Rancho Cucamonga</option><option>Montclair</option><option>Eastvale</option></select></label>
          <button type="submit" class="btn primary">Get Free Quote</button>
        </form>
      </div>
    </section>

    <section class="section light faq-section">
      <div class="container">
        ${sectionIntro("3PL buyer questions", threePlContent.faqTitle, "")}
        <div class="faq-list">
          ${threePlContent.faqs
            .map(
              (faq, index) => `<details class="faq-item reveal" ${index === 0 ? "open" : ""}>
                <summary>${esc(faq.q)}</summary>
                <p>${esc(faq.a)}</p>
              </details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  return pageShell({
    title: `${threePlContent.title} | ${brand.name}`,
    description: threePlContent.intro,
    active: "3pl-solutions.html",
    pageClass: "inner-page three-pl-page",
    body,
  });
}

await write("index.html", homepage());
for (const page of internalPages) {
  await write(`${page.slug}.html`, internalPage(page));
}
