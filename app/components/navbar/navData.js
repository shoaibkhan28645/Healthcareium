export const navigationData = {
  brand: {
    name: "HealthCareium",
    href: "/"
  },
  mainNavItems: [
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownData: {
        type: "products",
        sections: [
          {
            icon: "🛡️",
            title: "Fund Administration",
            description: "All-in-one partner to launch an investment vehicle",
            items: [
              { label: "Venture Funds", href: "/products/venture-funds" },
              { label: "Rolling Funds", href: "/products/rolling-funds" },
              { label: "Scout Funds", href: "/products/scout-funds" },
              { label: "SPVs", href: "/products/spvs" },
              { label: "Roll Up Vehicles", href: "/products/roll-up-vehicles" }
            ]
          },
          {
            icon: "🌐",
            title: "Investor Management",
            description: "Investor relations reimagined",
            items: [
              { label: "Digital Subscriptions", href: "/products/digital-subscriptions" },
              { label: "Data Room", href: "/products/data-room" }
            ]
          },
          {
            icon: "🧠",
            title: "Intelligence",
            description: "AI-powered insights across your fund and private market data",
            items: [
              { label: "Fin (beta)", href: "/products/fin-beta" }
            ]
          }
        ],
        footer: {
          text: "Looking for tools for startups?",
          linkText: "Explore offerings",
          linkHref: "/startups"
        }
      }
    },
    {
      label: "Solutions", 
      href: "/solutions",
      hasDropdown: true,
      dropdownData: {
        type: "solutions",
        columns: [
          {
            title: "BY PRODUCT SUITE",
            items: [
              {
                icon: "🛡️",
                title: "Fund Administration",
                description: "All-in-one partner to launch an investment vehicle"
              },
              {
                icon: "🌐",
                title: "Investor Management", 
                description: "Investor relations reimagined"
              }
            ]
          },
          {
            title: "WHO WE SERVE",
            items: [
              { label: "Emerging Managers", href: "/solutions/emerging-managers" },
              { label: "Established Venture", href: "/solutions/established-venture" },
              { label: "Institutional Investors", href: "/solutions/institutional-investors" },
              { label: "Crypto", href: "/solutions/crypto" }
            ]
          }
        ]
      }
    },
    {
      label: "Pricing",
      href: "/pricing",
      hasDropdown: false
    },
    {
      label: "Resources",
      href: "/resources", 
      hasDropdown: true,
      dropdownData: {
        type: "resources",
        columns: [
          {
            title: "RESOURCES",
            items: [
              { label: "Blog", href: "/resources/blog" },
              { label: "Help Center", href: "/resources/help-center" },
              { label: "Education Center", href: "/resources/education-center" },
              { label: "Data Center", href: "/resources/data-center" },
              { label: "About Us", href: "/resources/about-us" },
              { label: "Careers", href: "/resources/careers" }
            ]
          },
          {
            title: "FROM THE BLOG",
            blogPosts: [
              {
                category: "Q + A",
                title: "Insights from Institutional LPs: Preparing Funds for Major...",
                image: "/blog-1.jpg"
              },
              {
                category: "CASE STUDIES", 
                title: "So, how are your startup investments performing?",
                image: "/blog-2.jpg"
              },
              {
                category: "DATA",
                title: "Empowering every fund with free data rooms",
                image: "/blog-3.jpg"
              },
              {
                category: "PRODUCT NEWS",
                title: "New features and updates",
                image: "/blog-4.jpg"
              }
            ]
          }
        ]
      }
    }
  ],
  authItems: [
    {
      label: "Sign in",
      href: "/signin",
      variant: "text"
    },
    {
      label: "Contact sales",
      href: "/contact-sales",
      variant: "primary"
    }
  ]
};