// add items to the "Add Items" tab

$(document).ready(function() {
  var sections = [

    {"sectionName": "Стены, окна и двери",
    "items": [

      {
          "name" : "Closed Door",
          "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
          "model" : "models/js/closed-door28x80_baked.js",
          "type" : "7"
        }, 
        {
          "name" : "Open Door",
          "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
          "model" : "models/js/open_door.js",
          "type" : "7"
        }, 
        {
          "name" : "Window",
          "image" : "models/thumbnails/thumbnail_window.png",
          "model" : "models/js/whitewindow.js",
          "type" : "3"
        }, 
        {
          "name" : "Chair",
          "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
          "model" : "models/js/gus-churchchair-whiteoak.js",
          "type" : "1"
        }, 
        {
          "name" : "Red Chair",
          "image" : "models/thumbnails/thumbnail_tn-orange.png",
          "model" : "models/js/ik-ekero-orange_baked.js",
          "type" : "1"
        },
        {
          "name" : "Blue Chair",
          "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
          "model" : "models/js/ik-ekero-blue_baked.js",
          "type" : "1"
        },
        {
          "name" : "Dresser - Dark Wood",
          "image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
          "model" : "models/js/DWR_MATERA_DRESSER2.js",
          "type" : "1"
        }, 
        {
          "name" : "Dresser - White",
          "image" : "models/thumbnails/thumbnail_img25o.jpg",
          "model" : "models/js/we-narrow6white_baked.js",
          "type" : "1"
        },  
        {
          "name" : "Bedside table - Shale",
          "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
          "model" : "models/js/bd-shalebedside-smoke_baked.js",
          "type" : "1"
        }, 
        {
          "name" : "Bedside table - White",
          "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
          "model" : "models/js/cb-archnight-white_baked.js",
          "type" : "1"
        }, 
        {
          "name" : "Wardrobe - White",
          "image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
          "model" : "models/js/ik-kivine_baked.js",
          "type" : "1"
        }
      ]
    },
    {"sectionName": "Спальня",
    "items": [

      {
          "name" : "Closed Door",
          "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
          "model" : "models/js/closed-door28x80_baked.js",
          "type" : "7"
        }, 
        {
          "name" : "Open Door",
          "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
          "model" : "models/js/open_door.js",
          "type" : "7"
        }
    ]
  },
  {"sectionName": "Гостиная",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Кухня",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Ванная/Туалет",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Прихожая",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Детская",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Столовая",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Гардеробная",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Прачечная",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Рабочее место",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Терасса",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Гараж",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
},
{"sectionName": "Декор и др.",
  "items": [

    {
        "name" : "Closed Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
        "model" : "models/js/closed-door28x80_baked.js",
        "type" : "7"
      }, 
      {
        "name" : "Open Door",
        "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
        "model" : "models/js/open_door.js",
        "type" : "7"
      }
  ]
  }
];



  // $("#items-wrapper").load('itemsSection.html');
  var itemsAccordion = $("#itemsAccordion");

  for(section of sections) {
    var sectionHtml = '<div class="accordion-item">\n'+
    '            <h2 class="accordion-header" id="headingOne">\n'+
    '            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">\n'+
     '<span class="accordion-title">' + section.sectionName + '</span>\n'+
    '            </button>\n'+
    '            </h2>\n'+
    '            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\n'+
    '            <div class="accordion-body">\n';

    if(section.items.length > 0) {
      sectionHtml += '<div class="row row-cols-1 row-cols-sm-3 g-4">';

      for(item of section.items) {
        sectionHtml  += '<div class="col" > <div class="card item-card">' 
        + '<img src="' + item.image + '" class=" item-image" alt="...">'
        + '</div></div>';
      }

      sectionHtml += '</div>';
    }


    sectionHtml += '            </div>\n'+
    '            </div>\n'+
    '        </div>';

    itemsAccordion.append(sectionHtml);
  }



   
});