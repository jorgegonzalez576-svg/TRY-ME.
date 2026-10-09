// Generated from content/roll/catalogue-v2.json. Card and style wording is supplied by the catalog.
window.TryMeRollCatalog=Object.freeze({
  "game": "roll",
  "version": "2.0.0",
  "updated": "2026-10-04",
  "languages": [
    "es",
    "en"
  ],
  "levels": [
    {
      "value": 0,
      "key": "anticipacion",
      "label": {
        "es": "Anticipación",
        "en": "Anticipation"
      }
    },
    {
      "value": 1,
      "key": "sensual",
      "label": {
        "es": "Sensual",
        "en": "Sensual"
      }
    },
    {
      "value": 2,
      "key": "atrevido",
      "label": {
        "es": "Atrevido",
        "en": "Daring"
      }
    }
  ],
  "categories": {
    "saborear": {
      "es": "Saborear",
      "en": "Savor"
    },
    "provocar": {
      "es": "Provocar",
      "en": "Tease"
    },
    "acariciar": {
      "es": "Acariciar",
      "en": "Caress"
    },
    "delinear": {
      "es": "Delinear",
      "en": "Trace"
    },
    "esculpir": {
      "es": "Esculpir",
      "en": "Sculpt"
    }
  },
  "styles": {
    "lento": {
      "label": {
        "es": "Lento",
        "en": "Slow"
      },
      "line": {
        "es": "Más despacio de lo que te sale natural.",
        "en": "Slower than feels natural."
      }
    },
    "sutil": {
      "label": {
        "es": "Sutil",
        "en": "Subtle"
      },
      "line": {
        "es": "Lo más leve posible: que {recibe} tenga que prestar atención para sentirlo.",
        "en": "As light as possible: {recibe} should have to pay attention to feel it."
      }
    },
    "ciegas": {
      "label": {
        "es": "A ciegas",
        "en": "Eyes closed"
      },
      "line": {
        "es": "{recibe} cierra los ojos de principio a fin.",
        "en": "{recibe} keeps their eyes closed from start to finish."
      }
    },
    "silencio": {
      "label": {
        "es": "En silencio",
        "en": "In silence"
      },
      "line": {
        "es": "Ni una palabra, ninguno de los dos, hasta que termine.",
        "en": "Not a word from either of you until it ends."
      }
    },
    "oleadas": {
      "label": {
        "es": "En oleadas",
        "en": "In waves"
      },
      "line": {
        "es": "Unos segundos de contacto, una pausa breve, y otra vez.",
        "en": "A few seconds of contact, a brief pause, and again."
      }
    },
    "reves": {
      "label": {
        "es": "Al revés",
        "en": "Reversed"
      },
      "line": null,
      "banner": {
        "es": "Cambio de planes, {lanza}. Esta vez te toca dar.",
        "en": "Change of plans, {lanza}. This time you give."
      }
    }
  },
  "styleOverrides": {
    "provocar.lento": {
      "es": "Cada acercamiento tarda el doble. Estira la espera hasta el límite.",
      "en": "Every approach takes twice as long. Stretch the wait to the limit."
    },
    "delinear.sutil": {
      "es": "Un solo dedo, tan leve que el trazo se adivina más de lo que se siente.",
      "en": "One finger, so light the line is guessed more than felt."
    },
    "saborear.oleadas": {
      "es": "Un beso, una pausa en la que solo se sienta tu respiración, otro beso.",
      "en": "A kiss, a pause where only your breath is felt, another kiss."
    },
    "provocar.oleadas": {
      "es": "Acércate y retírate una y otra vez; en cada vuelta, un poco más cerca.",
      "en": "Move in and pull back again and again; a little closer each time."
    },
    "acariciar.oleadas": {
      "es": "Sin soltar: la caricia baja casi a nada y vuelve a crecer.",
      "en": "Without letting go: the caress fades almost to nothing and builds again."
    }
  },
  "filters": [
    {
      "key": "pecho",
      "label": {
        "es": "Pecho",
        "en": "Chest"
      },
      "defaultOn": true
    },
    {
      "key": "gluteos",
      "label": {
        "es": "Glúteos",
        "en": "Buttocks"
      },
      "defaultOn": true
    },
    {
      "key": "genitales",
      "label": {
        "es": "Genitales",
        "en": "Genitals"
      },
      "defaultOn": true
    },
    {
      "key": "oral",
      "label": {
        "es": "Sexo oral",
        "en": "Oral sex"
      },
      "defaultOn": true
    },
    {
      "key": "dedos",
      "label": {
        "es": "Dedos dentro",
        "en": "Finger penetration"
      },
      "defaultOn": true
    },
    {
      "key": "ropa",
      "label": {
        "es": "Quitar ropa",
        "en": "Removing clothes"
      },
      "defaultOn": true
    },
    {
      "key": "pies",
      "label": {
        "es": "Pies",
        "en": "Feet"
      },
      "defaultOn": true
    },
    {
      "key": "anal",
      "label": {
        "es": "Zona anal",
        "en": "Anal area"
      },
      "defaultOn": false
    }
  ],
  "rules": {
    "placeholders": {
      "giver": "{da}",
      "receiver": "{recibe}",
      "roller": "{lanza}"
    },
    "language": {
      "cardLanguage": "app",
      "styleLineFollowsCardLanguage": true,
      "showTranslationNotice": false
    },
    "blockedCombos": [
      [
        "esculpir",
        "sutil"
      ]
    ],
    "slowStyle": {
      "timeMultiplier": 1.5,
      "roundToSeconds": 5
    },
    "rerolls": {
      "perPerson": true,
      "allowance": {
        "6": 1,
        "12": 2,
        "free": {
          "every": 6,
          "amount": 1
        }
      },
      "visibleWhen": "card_revealed_and_timer_not_started",
      "askWho": true,
      "rerollsBothDice": true,
      "sameRoller": true,
      "rejectedCardExcludedForSession": true
    },
    "endTurn": {
      "timedCardsShowAfterFraction": 0.5,
      "untimedCardsShowNextImmediately": true,
      "pauseAlwaysVisible": true
    },
    "roleBalance": {
      "applyToLengths": [
        "12",
        "free"
      ],
      "maxDifference": 3
    },
    "progressive": {
      "6": [
        2,
        2,
        2
      ],
      "12": [
        4,
        4,
        4
      ],
      "freeOfferEveryTurns": 5,
      "raiseNeedsBoth": true,
      "lowerNeedsOne": true
    },
    "continuePlayingAddsTurns": 4,
    "fallbackToLowerLevelIfFewerThan": 2,
    "anatomy": {
      "values": [
        "vulva",
        "pene",
        "nd"
      ],
      "default": "nd"
    },
    "filterDefaults": {
      "pecho": true,
      "gluteos": true,
      "genitales": true,
      "oral": true,
      "dedos": true,
      "ropa": true,
      "pies": true,
      "anal": false
    }
  },
  "ui": {
    "rerollButton": {
      "es": "Otra tirada ({n})",
      "en": "Roll again ({n})"
    },
    "rerollWho": {
      "es": "¿Quién la cambia?",
      "en": "Who's changing it?"
    },
    "rerollWhoOption": {
      "es": "{nombre} ({n})",
      "en": "{nombre} ({n})"
    },
    "rerollCancel": {
      "es": "Mejor la jugamos",
      "en": "Let's play it"
    },
    "endTurn": {
      "es": "Terminar turno",
      "en": "End turn"
    },
    "next": {
      "es": "Seguir",
      "en": "Next"
    },
    "pause": {
      "es": "Pausa",
      "en": "Pause"
    },
    "anatomyTitle": {
      "es": "Cuerpo",
      "en": "Body"
    },
    "anatomyHint": {
      "es": "Solo sirve para que las cartas nombren bien cada cuerpo. Puedes no decirlo.",
      "en": "Only used so the cards name each body correctly. You can skip it."
    },
    "anatomyOptions": {
      "vulva": {
        "es": "Vulva",
        "en": "Vulva"
      },
      "pene": {
        "es": "Pene",
        "en": "Penis"
      },
      "nd": {
        "es": "Prefiero no decir",
        "en": "Prefer not to say"
      }
    },
    "filtersTitle": {
      "es": "Antes de empezar, si quieren",
      "en": "Before you start, if you wish"
    },
    "filtersSubtitle": {
      "es": "Apaguen lo que prefieran dejar fuera hoy. Cada quien lo suyo.",
      "en": "Turn off what you prefer to leave out today. Each person chooses their own."
    },
    "filtersSkip": {
      "es": "Saltar",
      "en": "Skip"
    }
  },
  "cards": [
    {
      "id": "SAB-AN1",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, toma la mano de {recibe} y besa la palma, luego la muñeca, sin prisa por llegar a ningún otro lugar.",
        "en": "{da}, take {recibe}'s hand and kiss the palm, then the wrist, in no hurry to go anywhere else."
      }
    },
    {
      "id": "SAB-AN2",
      "category": "saborear",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa la frente de {recibe}, después cada párpado, y termina en la punta de la nariz.",
        "en": "{da}, kiss {recibe}'s forehead, then each eyelid, and finish on the tip of their nose."
      }
    },
    {
      "id": "SAB-AN3",
      "category": "saborear",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, deja un beso corto en una comisura de los labios de {recibe} y otro en la otra. Todavía no en la boca.",
        "en": "{da}, leave a short kiss at one corner of {recibe}'s mouth and another at the other. Not on the lips yet."
      }
    },
    {
      "id": "SAB-AN4",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa el hombro de {recibe} por encima de la ropa y sube con besos pequeños hasta la base del cuello.",
        "en": "{da}, kiss {recibe}'s shoulder over their clothes and climb with small kisses to the base of their neck."
      }
    },
    {
      "id": "SAB-AN5",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa a {recibe} en los labios y no te separes hasta que termine el tiempo.",
        "en": "{da}, kiss {recibe} on the lips and don't pull away until time runs out."
      }
    },
    {
      "id": "SAB-AN6",
      "category": "saborear",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con besos pequeños la línea de la mandíbula de {recibe}, de una oreja a la otra.",
        "en": "{da}, trace {recibe}'s jawline with small kisses, from one ear to the other."
      }
    },
    {
      "id": "SAB-AN7",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa despacio cada nudillo de la mano de {recibe} y termina con un beso en la punta de sus dedos.",
        "en": "{da}, slowly kiss each knuckle of {recibe}'s hand and finish with a kiss on their fingertips."
      }
    },
    {
      "id": "SAB-AN8",
      "category": "saborear",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, besa la mejilla de {recibe}, luego cerca de su oreja, y susurra su nombre antes del último beso.",
        "en": "{da}, kiss {recibe}'s cheek, then near their ear, and whisper their name before the last kiss."
      }
    },
    {
      "id": "SAB-AN9",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa el labio superior de {recibe}, después el inferior, cada uno por separado y sin prisa.",
        "en": "{da}, kiss {recibe}'s upper lip, then the lower one, each on its own and unhurried."
      }
    },
    {
      "id": "SAB-AN10",
      "category": "saborear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa la muñeca de {recibe} y sube con besos cortos por el antebrazo hasta el codo.",
        "en": "{da}, kiss {recibe}'s wrist and work up the forearm to the elbow with short kisses."
      }
    },
    {
      "id": "SAB-SE1",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa la nuca de {recibe} y baja por la columna hasta la cintura, levantando su ropa a medida que avanzas.",
        "en": "{da}, kiss the back of {recibe}'s neck and move down their spine to the waist, lifting their clothes as you go."
      }
    },
    {
      "id": "SAB-SE2",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "ropa",
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la prenda de arriba y besa su pecho despacio, rodeando los pezones sin tocarlos todavía.",
        "en": "{da}, take off {recibe}'s top and slowly kiss their chest, circling the nipples without touching them yet."
      }
    },
    {
      "id": "SAB-SE3",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa la cara interna de los muslos de {recibe}, de la rodilla hacia arriba, hasta rozar su ropa interior.",
        "en": "{da}, kiss the inside of {recibe}'s thighs, from the knee upward, until you brush their underwear."
      }
    },
    {
      "id": "SAB-SE4",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa el abdomen de {recibe} bajando desde el ombligo hasta el borde de su ropa interior.",
        "en": "{da}, kiss {recibe}'s stomach, moving down from the navel to the edge of their underwear."
      }
    },
    {
      "id": "SAB-SE5",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa los glúteos de {recibe} por encima de su ropa interior, despacio, de un lado al otro.",
        "en": "{da}, kiss {recibe}'s buttocks over their underwear, slowly, from one side to the other."
      }
    },
    {
      "id": "SAB-SE6",
      "category": "saborear",
      "level": 1,
      "seconds": null,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, deja un beso lento sobre la ropa interior de {recibe}, justo en su zona íntima, y aléjate.",
        "en": "{da}, place one slow kiss on {recibe}'s underwear, right over their intimate area, and pull away."
      }
    },
    {
      "id": "SAB-SE7",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa la espalda de {recibe} por debajo de la ropa, de los omóplatos hasta la cintura.",
        "en": "{da}, kiss {recibe}'s back under their clothes, from the shoulder blades down to the waist."
      }
    },
    {
      "id": "SAB-SE8",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa a {recibe} en la boca mientras tus manos sostienen su cintura, sin moverlas de ahí.",
        "en": "{da}, kiss {recibe} on the mouth while your hands hold their waist, without moving them from there."
      }
    },
    {
      "id": "SAB-SE9",
      "category": "saborear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa las caderas de {recibe} justo por encima del borde de su ropa interior, de un lado al otro.",
        "en": "{da}, kiss {recibe}'s hips just above the edge of their underwear, from one side to the other."
      }
    },
    {
      "id": "SAB-SE10",
      "category": "saborear",
      "level": 1,
      "seconds": 60,
      "filters": [
        "ropa",
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la prenda de arriba y besa su pecho y su abdomen en línea recta hacia abajo, hasta la cintura.",
        "en": "{da}, take off {recibe}'s top and kiss their chest and stomach in a straight line down to the waist."
      }
    },
    {
      "id": "SAB-AT1",
      "category": "saborear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, hazle sexo oral a {recibe}, despacio, pendiente de cómo responde su cuerpo.",
        "en": "{da}, give {recibe} oral sex, slowly, paying attention to how their body responds."
      },
      "variants": {
        "vulva": {
          "es": "{da}, hazle sexo oral a {recibe}: lame su vulva despacio y dedica tiempo a su clítoris, pendiente de cómo responde su cuerpo.",
          "en": "{da}, give {recibe} oral sex: lick their vulva slowly and spend time on their clitoris, paying attention to how their body responds."
        },
        "pene": {
          "es": "{da}, hazle sexo oral a {recibe}: recorre su pene con la lengua y los labios, despacio, pendiente de cómo responde su cuerpo.",
          "en": "{da}, give {recibe} oral sex: run your tongue and lips along their penis, slowly, paying attention to how their body responds."
        }
      }
    },
    {
      "id": "SAB-AT2",
      "category": "saborear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, lame los pezones de {recibe}, primero uno y luego el otro, alternando la lengua con besos.",
        "en": "{da}, lick {recibe}'s nipples, first one and then the other, alternating your tongue with kisses."
      }
    },
    {
      "id": "SAB-AT3",
      "category": "saborear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con la lengua el cuerpo de {recibe} desde el cuello hasta sus genitales, sin saltarte ningún tramo, y termina con un beso largo entre sus piernas.",
        "en": "{da}, run your tongue down {recibe}'s body from the neck to their genitals without skipping any stretch, and finish with a long kiss between their legs."
      }
    },
    {
      "id": "SAB-AT4",
      "category": "saborear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "ropa",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la ropa interior con los dientes, despacio, y besa cada centímetro de piel que vayas descubriendo.",
        "en": "{da}, take off {recibe}'s underwear with your teeth, slowly, and kiss every inch of skin you uncover."
      }
    },
    {
      "id": "SAB-AT5",
      "category": "saborear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, lame la cara interna de los muslos de {recibe}, sube hasta sus genitales y quédate ahí con la lengua.",
        "en": "{da}, lick the inside of {recibe}'s thighs, move up to their genitals and stay there with your tongue."
      },
      "variants": {
        "vulva": {
          "es": "{da}, lame la cara interna de los muslos de {recibe}, sube hasta su vulva y quédate ahí con la lengua.",
          "en": "{da}, lick the inside of {recibe}'s thighs, move up to their vulva and stay there with your tongue."
        },
        "pene": {
          "es": "{da}, lame la cara interna de los muslos de {recibe}, sube hasta su pene y sus testículos y quédate ahí con la lengua.",
          "en": "{da}, lick the inside of {recibe}'s thighs, move up to their penis and testicles and stay there with your tongue."
        }
      }
    },
    {
      "id": "SAB-AT6",
      "category": "saborear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, pide a {recibe} que se acueste boca abajo y recorre con la lengua su espalda baja y sus glúteos.",
        "en": "{da}, ask {recibe} to lie face down and run your tongue over their lower back and buttocks."
      }
    },
    {
      "id": "SAB-AT7",
      "category": "saborear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, besa y lame los genitales de {recibe} por encima de la ropa interior; luego apártala y sigue sin ella.",
        "en": "{da}, kiss and lick {recibe}'s genitals over their underwear; then move it aside and keep going without it."
      }
    },
    {
      "id": "SAB-AT8",
      "category": "saborear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, hazle sexo oral a {recibe} con las manos detrás de tu espalda: solo tu boca.",
        "en": "{da}, give {recibe} oral sex with your hands behind your back: only your mouth."
      },
      "variants": {
        "vulva": {
          "es": "{da}, con las manos detrás de tu espalda, usa solo tu boca y tu lengua en la vulva y el clítoris de {recibe}.",
          "en": "{da}, with your hands behind your back, use only your mouth and tongue on {recibe}'s vulva and clitoris."
        },
        "pene": {
          "es": "{da}, con las manos detrás de tu espalda, usa solo tu boca en el pene de {recibe}.",
          "en": "{da}, with your hands behind your back, use only your mouth on {recibe}'s penis."
        }
      }
    },
    {
      "id": "SAB-AT9",
      "category": "saborear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, lame despacio el cuello, el pecho y el abdomen de {recibe}, y detente justo encima de sus genitales.",
        "en": "{da}, slowly lick {recibe}'s neck, chest and stomach, and stop just above their genitals."
      }
    },
    {
      "id": "SAB-AT10",
      "category": "saborear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "gluteos",
        "anal"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con {recibe} boca abajo, besa y lame sus glúteos y baja con la lengua hasta su zona anal.",
        "en": "{da}, with {recibe} face down, kiss and lick their buttocks and move your tongue down to their anal area."
      }
    },
    {
      "id": "PRO-AN1",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acerca tus labios a los de {recibe} hasta casi tocarlos y quédate ahí sin besar. Solo cuando termine el tiempo, un beso breve.",
        "en": "{da}, bring your lips almost to {recibe}'s and stay there without kissing. Only when time runs out, one brief kiss."
      }
    },
    {
      "id": "PRO-AN2",
      "category": "provocar",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, dile al oído a {recibe} lo primero que te llamó la atención de su cuerpo hoy, y aléjate sin tocar.",
        "en": "{da}, whisper in {recibe}'s ear the first thing about their body that caught your attention today, then pull away without touching."
      }
    },
    {
      "id": "PRO-AN3",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [
        "ciegas"
      ],
      "text": {
        "es": "{da}, mira a {recibe} a los ojos, sin hablar y sin tocar, hasta que termine el tiempo. Al final, toma su mano.",
        "en": "{da}, look {recibe} in the eyes, without talking or touching, until time runs out. At the end, take their hand."
      }
    },
    {
      "id": "PRO-AN4",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sopla suavemente sobre el cuello de {recibe}, de la oreja al hombro, sin que tus labios toquen la piel.",
        "en": "{da}, blow softly along {recibe}'s neck, from ear to shoulder, without your lips touching the skin."
      }
    },
    {
      "id": "PRO-AN5",
      "category": "provocar",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [
        "oleadas"
      ],
      "text": {
        "es": "{da}, acércate a {recibe} como si fueras a dar un beso y retírate en el último segundo. Hazlo tres veces. A la cuarta, sí.",
        "en": "{da}, lean in to {recibe} as if to kiss and pull back at the last second. Do it three times. The fourth time, kiss."
      }
    },
    {
      "id": "PRO-AN6",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, pasa tu mano a un centímetro de la piel de {recibe}, de la muñeca al hombro, sin llegar a tocar. Que sienta el calor, no el contacto.",
        "en": "{da}, move your hand a centimeter above {recibe}'s skin, from wrist to shoulder, without touching. Let them feel the warmth, not the contact."
      }
    },
    {
      "id": "PRO-AN7",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, toma la mano de {recibe} y acércala despacio a tu cara; deja que te toque solo cuando termine el tiempo.",
        "en": "{da}, take {recibe}'s hand and slowly bring it toward your face; let them touch you only when time runs out."
      }
    },
    {
      "id": "PRO-AN8",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acerca tu boca a la oreja de {recibe} y respira despacio, sin decir nada, hasta que termine el tiempo.",
        "en": "{da}, bring your mouth to {recibe}'s ear and breathe slowly, saying nothing, until time runs out."
      }
    },
    {
      "id": "PRO-AN9",
      "category": "provocar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, roza con tu nariz la nariz de {recibe}, luego su mejilla y su cuello, sin besar.",
        "en": "{da}, brush your nose against {recibe}'s nose, then their cheek and neck, without kissing."
      }
    },
    {
      "id": "PRO-AN10",
      "category": "provocar",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, dile a {recibe} «tengo ganas de besarte» y no lo hagas hasta que te lo pida con palabras.",
        "en": "{da}, tell {recibe} \"I want to kiss you\" and don't do it until they ask for it out loud."
      }
    },
    {
      "id": "PRO-SE1",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "pecho",
        "gluteos",
        "genitales"
      ],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, dile al oído a {recibe} qué parte de su cuerpo vas a tocar. No la toques hasta que termine el tiempo; entonces, cumple.",
        "en": "{da}, whisper to {recibe} which part of their body you're going to touch. Don't touch it until time runs out; then, keep your word."
      }
    },
    {
      "id": "PRO-SE2",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} una prenda que elijas, lo más despacio que puedas, sin que tus manos toquen su piel.",
        "en": "{da}, take off one piece of {recibe}'s clothing of your choice, as slowly as you can, without your hands touching their skin."
      }
    },
    {
      "id": "PRO-SE3",
      "category": "provocar",
      "level": 1,
      "seconds": 30,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, apoya la mano sobre la ropa interior de {recibe}, justo en su zona íntima, y no la muevas hasta que termine el tiempo.",
        "en": "{da}, rest your hand on {recibe}'s underwear, right over their intimate area, and don't move it until time runs out."
      }
    },
    {
      "id": "PRO-SE4",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre el cuerpo de {recibe} con los labios a un milímetro de la piel, del cuello hasta la ropa interior, sin besar.",
        "en": "{da}, travel over {recibe}'s body with your lips a millimeter from the skin, from the neck to their underwear, without kissing."
      }
    },
    {
      "id": "PRO-SE5",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, siéntate de frente sobre las piernas de {recibe}, con las manos detrás de tu espalda. Acércate todo lo posible sin besar.",
        "en": "{da}, sit facing {recibe} on their lap, hands behind your back. Get as close as you can without kissing."
      }
    },
    {
      "id": "PRO-SE6",
      "category": "provocar",
      "level": 1,
      "seconds": null,
      "filters": [],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, dile al oído a {recibe}, en una sola frase, lo que te gustaría hacerle esta noche. Luego sepárate sin decir nada más.",
        "en": "{da}, whisper to {recibe}, in a single sentence, what you'd like to do to them tonight. Then pull away without another word."
      }
    },
    {
      "id": "PRO-SE7",
      "category": "provocar",
      "level": 1,
      "seconds": null,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, desabrocha despacio el pantalón o la falda de {recibe} y detente justo ahí, sin bajarlo.",
        "en": "{da}, slowly unfasten {recibe}'s pants or skirt and stop right there, without pulling them down."
      }
    },
    {
      "id": "PRO-SE8",
      "category": "provocar",
      "level": 1,
      "seconds": 30,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, pasa la palma de tu mano a un centímetro de los genitales de {recibe}, por encima de la ropa, sin tocarlos.",
        "en": "{da}, move your palm a centimeter above {recibe}'s genitals, over their clothes, without touching."
      }
    },
    {
      "id": "PRO-SE9",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [
        "oleadas"
      ],
      "text": {
        "es": "{da}, besa a {recibe} y, cuando intente seguir, apártate un poco. Repite hasta que termine el tiempo.",
        "en": "{da}, kiss {recibe} and, when they try to keep going, pull back a little. Repeat until time runs out."
      }
    },
    {
      "id": "PRO-SE10",
      "category": "provocar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [
        "ciegas"
      ],
      "text": {
        "es": "{da}, quítate la prenda de arriba frente a {recibe}, muy despacio, sin apartar la mirada de sus ojos.",
        "en": "{da}, take off your top in front of {recibe}, very slowly, without looking away from their eyes."
      }
    },
    {
      "id": "PRO-AT1",
      "category": "provocar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [
        "oleadas"
      ],
      "text": {
        "es": "{da}, masturba a {recibe} y detente justo cuando más lo esté disfrutando. Espera unos segundos y vuelve a empezar.",
        "en": "{da}, masturbate {recibe} and stop right when they're enjoying it most. Wait a few seconds and start again."
      },
      "variants": {
        "vulva": {
          "es": "{da}, acaricia el clítoris de {recibe} y detente justo cuando más lo esté disfrutando. Espera unos segundos y vuelve a empezar.",
          "en": "{da}, stroke {recibe}'s clitoris and stop right when they're enjoying it most. Wait a few seconds and start again."
        },
        "pene": {
          "es": "{da}, masturba el pene de {recibe} y detente justo cuando más lo esté disfrutando. Espera unos segundos y vuelve a empezar.",
          "en": "{da}, stroke {recibe}'s penis and stop right when they're enjoying it most. Wait a few seconds and start again."
        }
      }
    },
    {
      "id": "PRO-AT2",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [
        "ciegas"
      ],
      "text": {
        "es": "{da}, tócate frente a {recibe}, sin prisa, mientras {recibe} solo mira. Sin contacto entre ustedes.",
        "en": "{da}, touch yourself in front of {recibe}, unhurried, while {recibe} only watches. No contact between you."
      }
    },
    {
      "id": "PRO-AT3",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "pecho",
        "gluteos",
        "genitales",
        "oral"
      ],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, nombra en voz baja una zona del cuerpo de {recibe} y acerca tus labios sin tocarla. Luego otra, y otra.",
        "en": "{da}, quietly name a part of {recibe}'s body and bring your lips close without touching it. Then another, and another."
      }
    },
    {
      "id": "PRO-AT4",
      "category": "provocar",
      "level": 2,
      "seconds": null,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} toda la ropa, prenda por prenda, y no toques su piel hasta que no le quede nada puesto.",
        "en": "{da}, undress {recibe} completely, piece by piece, and don't touch their skin until they have nothing on."
      }
    },
    {
      "id": "PRO-AT5",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [
        "silencio"
      ],
      "text": {
        "es": "{da}, pide a {recibe} que se toque mientras tú le dices al oído qué hacer y a qué ritmo.",
        "en": "{da}, ask {recibe} to touch themselves while you whisper what to do and at what pace."
      }
    },
    {
      "id": "PRO-AT6",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con la punta de la lengua el borde de la ropa interior de {recibe} y bájala solo un poco cada diez segundos.",
        "en": "{da}, run the tip of your tongue along the edge of {recibe}'s underwear and lower it just a little every ten seconds."
      }
    },
    {
      "id": "PRO-AT7",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "oral"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, lame alrededor de los genitales de {recibe}, cada vez más cerca, sin llegar a tocarlos hasta el final del tiempo.",
        "en": "{da}, lick around {recibe}'s genitals, closer and closer, without touching them until time runs out."
      }
    },
    {
      "id": "PRO-AT8",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, frota tus genitales contra los de {recibe} por encima de la ropa interior, despacio, sin pasar de ahí.",
        "en": "{da}, rub your genitals against {recibe}'s over your underwear, slowly, and go no further."
      }
    },
    {
      "id": "PRO-AT9",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, pon lubricante en tu mano y acércala a los genitales de {recibe}; tócalos solo con un dedo, una vez cada diez segundos.",
        "en": "{da}, put lubricant on your hand and bring it to {recibe}'s genitals; touch them with just one finger, once every ten seconds."
      }
    },
    {
      "id": "PRO-AT10",
      "category": "provocar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "anal"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, roza la zona anal de {recibe} con un dedo, sin entrar, en círculos lentos.",
        "en": "{da}, with lubricant, brush {recibe}'s anal area with one finger, without entering, in slow circles."
      }
    },
    {
      "id": "ACA-AN1",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia el cabello de {recibe} desde la frente hacia atrás, con la mano entera, sin detenerte.",
        "en": "{da}, stroke {recibe}'s hair from the forehead back, with your whole hand, without stopping."
      }
    },
    {
      "id": "ACA-AN2",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sostén la cara de {recibe} entre tus manos y acaricia sus mejillas con los pulgares.",
        "en": "{da}, hold {recibe}'s face in your hands and stroke their cheeks with your thumbs."
      }
    },
    {
      "id": "ACA-AN3",
      "category": "acariciar",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia la espalda de {recibe} por encima de la ropa con la palma abierta, en círculos amplios.",
        "en": "{da}, caress {recibe}'s back over their clothes with an open palm, in wide circles."
      }
    },
    {
      "id": "ACA-AN4",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, entrelaza tus dedos con los de {recibe} y acaricia el dorso de su mano con el pulgar.",
        "en": "{da}, lace your fingers with {recibe}'s and stroke the back of their hand with your thumb."
      }
    },
    {
      "id": "ACA-AN5",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, abraza a {recibe} por detrás y acaricia sus brazos, de los hombros a las manos.",
        "en": "{da}, hug {recibe} from behind and caress their arms, from shoulders to hands."
      }
    },
    {
      "id": "ACA-AN6",
      "category": "acariciar",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia la nuca de {recibe} y el nacimiento de su cabello con la mano abierta, despacio y sin parar.",
        "en": "{da}, caress the back of {recibe}'s neck and their hairline with an open hand, slowly and without stopping."
      }
    },
    {
      "id": "ACA-AN7",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia la cara de {recibe} con el dorso de los dedos, de la frente a la barbilla, una y otra vez.",
        "en": "{da}, stroke {recibe}'s face with the backs of your fingers, from forehead to chin, again and again."
      }
    },
    {
      "id": "ACA-AN8",
      "category": "acariciar",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia los hombros y la parte alta de la espalda de {recibe} con las dos palmas, en movimientos largos.",
        "en": "{da}, caress {recibe}'s shoulders and upper back with both palms, in long strokes."
      }
    },
    {
      "id": "ACA-AN9",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recuéstate junto a {recibe} y acaricia su brazo, del hombro a la mano, sin detenerte.",
        "en": "{da}, lie down next to {recibe} and caress their arm, from shoulder to hand, without stopping."
      }
    },
    {
      "id": "ACA-AN10",
      "category": "acariciar",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia el cuello de {recibe} con la palma abierta, de la nuca hacia adelante y de vuelta.",
        "en": "{da}, caress {recibe}'s neck with an open palm, from the nape forward and back again."
      }
    },
    {
      "id": "ACA-SE1",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, mete la mano bajo la ropa de {recibe} y acaricia su pecho con la palma, piel con piel.",
        "en": "{da}, slip your hand under {recibe}'s clothes and caress their chest with your palm, skin to skin."
      }
    },
    {
      "id": "ACA-SE2",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia los genitales de {recibe} por encima de la ropa, con la palma abierta y un movimiento lento y continuo.",
        "en": "{da}, caress {recibe}'s genitals over their clothes, with an open palm and a slow, continuous motion."
      }
    },
    {
      "id": "ACA-SE3",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia la cara interna de los muslos de {recibe} con las palmas, subiendo hasta rozar su zona íntima.",
        "en": "{da}, caress the inside of {recibe}'s thighs with your palms, moving up until you brush their intimate area."
      }
    },
    {
      "id": "ACA-SE4",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia los glúteos de {recibe} por debajo de la ropa, con movimientos lentos y envolventes.",
        "en": "{da}, caress {recibe}'s buttocks under their clothes, with slow, enveloping strokes."
      }
    },
    {
      "id": "ACA-SE5",
      "category": "acariciar",
      "level": 1,
      "seconds": 60,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acuéstate detrás de {recibe} y acaricia su cuerpo por debajo de la ropa, del pecho a las caderas.",
        "en": "{da}, lie behind {recibe} and caress their body under their clothes, from chest to hips."
      }
    },
    {
      "id": "ACA-SE6",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, mete la mano dentro de la ropa interior de {recibe} y acaricia su zona íntima con suavidad, sin buscar más.",
        "en": "{da}, slip your hand inside {recibe}'s underwear and gently caress their intimate area, without going further."
      }
    },
    {
      "id": "ACA-SE7",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia la espalda baja y los glúteos de {recibe} con las palmas, por encima de su ropa interior.",
        "en": "{da}, caress {recibe}'s lower back and buttocks with your palms, over their underwear."
      }
    },
    {
      "id": "ACA-SE8",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia el abdomen de {recibe} por debajo de la ropa y baja la mano hasta el borde de su ropa interior, sin pasarlo.",
        "en": "{da}, caress {recibe}'s stomach under their clothes and move your hand down to the edge of their underwear, no further."
      }
    },
    {
      "id": "ACA-SE9",
      "category": "acariciar",
      "level": 1,
      "seconds": 60,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} el pantalón y acaricia sus piernas de los tobillos hasta las caderas.",
        "en": "{da}, take off {recibe}'s pants and caress their legs from the ankles up to the hips."
      }
    },
    {
      "id": "ACA-SE10",
      "category": "acariciar",
      "level": 1,
      "seconds": 45,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, siéntate detrás de {recibe} y acaricia su pecho y su abdomen por debajo de la ropa, despacio.",
        "en": "{da}, sit behind {recibe} and slowly caress their chest and stomach under their clothes."
      }
    },
    {
      "id": "ACA-AT1",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masturba a {recibe} con la mano, a un ritmo constante, hasta que termine el tiempo.",
        "en": "{da}, masturbate {recibe} with your hand, at a steady pace, until time runs out."
      },
      "variants": {
        "vulva": {
          "es": "{da}, acaricia la vulva de {recibe} con la mano y dedica movimientos constantes a su clítoris hasta que termine el tiempo.",
          "en": "{da}, caress {recibe}'s vulva with your hand and give their clitoris steady strokes until time runs out."
        },
        "pene": {
          "es": "{da}, masturba el pene de {recibe} con la mano, a un ritmo constante, hasta que termine el tiempo.",
          "en": "{da}, stroke {recibe}'s penis with your hand, at a steady pace, until time runs out."
        }
      }
    },
    {
      "id": "ACA-AT2",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante en las manos, acaricia los genitales de {recibe} usando las dos manos a la vez.",
        "en": "{da}, with lubricant on your hands, caress {recibe}'s genitals using both hands at once."
      }
    },
    {
      "id": "ACA-AT3",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales",
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, ponte detrás de {recibe} y acaricia sus genitales con una mano y su pecho con la otra, sin detener ninguna.",
        "en": "{da}, get behind {recibe} and caress their genitals with one hand and their chest with the other, without stopping either."
      }
    },
    {
      "id": "ACA-AT4",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "ropa",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} toda la ropa y acaricia su cuerpo entero, sin saltarte sus partes íntimas.",
        "en": "{da}, take off all of {recibe}'s clothes and caress their whole body, without skipping their intimate parts."
      }
    },
    {
      "id": "ACA-AT5",
      "category": "acariciar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia los genitales de {recibe} mientras se besan en la boca, sin separarse hasta que termine el tiempo.",
        "en": "{da}, caress {recibe}'s genitals while you kiss on the mouth, without separating until time runs out."
      }
    },
    {
      "id": "ACA-AT6",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, pide a {recibe} que te enseñe con su mano cómo le gusta que le toquen. Luego hazlo tú.",
        "en": "{da}, ask {recibe} to show you with their hand how they like to be touched. Then you do it."
      }
    },
    {
      "id": "ACA-AT7",
      "category": "acariciar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acaricia los genitales de {recibe} con una mano y la cara interna de sus muslos con la otra.",
        "en": "{da}, caress {recibe}'s genitals with one hand and the inside of their thighs with the other."
      }
    },
    {
      "id": "ACA-AT8",
      "category": "acariciar",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [
        "lento"
      ],
      "text": {
        "es": "{da}, con lubricante, masturba a {recibe} alternando un ritmo lento con uno más rápido.",
        "en": "{da}, with lubricant, masturbate {recibe}, alternating a slow pace with a faster one."
      },
      "variants": {
        "vulva": {
          "es": "{da}, con lubricante, acaricia la vulva y el clítoris de {recibe} alternando un ritmo lento con uno más rápido.",
          "en": "{da}, with lubricant, caress {recibe}'s vulva and clitoris, alternating a slow pace with a faster one."
        },
        "pene": {
          "es": "{da}, con lubricante, masturba el pene de {recibe} alternando un ritmo lento con uno más rápido.",
          "en": "{da}, with lubricant, stroke {recibe}'s penis, alternating a slow pace with a faster one."
        }
      }
    },
    {
      "id": "ACA-AT9",
      "category": "acariciar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, acuéstate encima de {recibe}, piel con piel, y acaricia todo su cuerpo sin separar tus caderas de las suyas.",
        "en": "{da}, lie on top of {recibe}, skin to skin, and caress their whole body without moving your hips away from theirs."
      }
    },
    {
      "id": "ACA-AT10",
      "category": "acariciar",
      "level": 2,
      "seconds": 60,
      "filters": [
        "gluteos",
        "anal"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, acaricia los glúteos de {recibe} y deja que tus dedos pasen despacio por su zona anal.",
        "en": "{da}, with lubricant, caress {recibe}'s buttocks and let your fingers slide slowly over their anal area."
      }
    },
    {
      "id": "DEL-AN1",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja con la yema de un dedo el contorno de los labios de {recibe}, muy despacio.",
        "en": "{da}, trace the outline of {recibe}'s lips with a fingertip, very slowly."
      }
    },
    {
      "id": "DEL-AN2",
      "category": "delinear",
      "level": 0,
      "seconds": null,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, escribe una palabra con el dedo en la palma de la mano de {recibe}. Al terminar, {recibe} dice cuál era.",
        "en": "{da}, write a word with your finger on {recibe}'s palm. When you finish, {recibe} says what it was."
      }
    },
    {
      "id": "DEL-AN3",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sigue con las yemas la línea de las cejas de {recibe}, luego el puente de la nariz y el borde de la mandíbula.",
        "en": "{da}, follow the line of {recibe}'s eyebrows with your fingertips, then the bridge of their nose and the edge of their jaw."
      }
    },
    {
      "id": "DEL-AN4",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con un dedo el brazo de {recibe}, del hombro hasta la punta de cada dedo.",
        "en": "{da}, run one finger along {recibe}'s arm, from the shoulder to the tip of each finger."
      }
    },
    {
      "id": "DEL-AN5",
      "category": "delinear",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja figuras en la espalda de {recibe}, por encima de la ropa. Al final, {recibe} dice cuántas reconoció.",
        "en": "{da}, draw shapes on {recibe}'s back, over their clothes. At the end, {recibe} says how many they recognized."
      }
    },
    {
      "id": "DEL-AN6",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sigue el contorno de la oreja de {recibe} con la yema de un dedo y baja por el cuello hasta la clavícula.",
        "en": "{da}, trace the outline of {recibe}'s ear with a fingertip and move down their neck to the collarbone."
      }
    },
    {
      "id": "DEL-AN7",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, traza con un dedo las líneas de la palma de la mano de {recibe}, una por una.",
        "en": "{da}, trace the lines of {recibe}'s palm with one finger, one by one."
      }
    },
    {
      "id": "DEL-AN8",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sigue con la yema de un dedo el contorno de la cara de {recibe}: frente, sien, mejilla y mentón.",
        "en": "{da}, follow the outline of {recibe}'s face with a fingertip: forehead, temple, cheek and chin."
      }
    },
    {
      "id": "DEL-AN9",
      "category": "delinear",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con un dedo la nuca de {recibe}, de una oreja a la otra, siguiendo el nacimiento del cabello.",
        "en": "{da}, run a finger across the back of {recibe}'s neck, from one ear to the other, along the hairline."
      }
    },
    {
      "id": "DEL-AN10",
      "category": "delinear",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja con un dedo una letra en la espalda de {recibe}, luego otra, hasta formar una palabra. Al final, {recibe} dice cuál era.",
        "en": "{da}, draw a letter on {recibe}'s back with one finger, then another, until you spell a word. At the end, {recibe} says what it was."
      }
    },
    {
      "id": "DEL-SE1",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja con la yema de un dedo el contorno de los pezones de {recibe}, por encima o por debajo de la ropa.",
        "en": "{da}, trace the outline of {recibe}'s nipples with a fingertip, over or under their clothes."
      }
    },
    {
      "id": "DEL-SE2",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sigue con un dedo el borde de la ropa interior de {recibe}, de una cadera a la otra, pasando apenas un centímetro por debajo.",
        "en": "{da}, follow the edge of {recibe}'s underwear with one finger, from hip to hip, slipping just a centimeter underneath."
      }
    },
    {
      "id": "DEL-SE3",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, traza con un dedo una línea desde los labios de {recibe}, por el centro de su cuerpo, hasta su zona íntima, por encima de la ropa.",
        "en": "{da}, draw a line with one finger from {recibe}'s lips, down the center of their body, to their intimate area, over their clothes."
      }
    },
    {
      "id": "DEL-SE4",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre la columna de {recibe} con la yema de un dedo, de la nuca hasta donde empiezan los glúteos, por debajo de la ropa.",
        "en": "{da}, run a fingertip down {recibe}'s spine, from the nape to where their buttocks begin, under their clothes."
      }
    },
    {
      "id": "DEL-SE5",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja círculos con las yemas en la cara interna de los muslos de {recibe}, cada uno un poco más arriba, hasta rozar su ropa interior.",
        "en": "{da}, draw circles with your fingertips on the inside of {recibe}'s thighs, each a little higher, until you brush their underwear."
      }
    },
    {
      "id": "DEL-SE6",
      "category": "delinear",
      "level": 1,
      "seconds": null,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, escribe una palabra con el dedo sobre la ropa interior de {recibe}, en su zona íntima. Al terminar, {recibe} dice cuál era.",
        "en": "{da}, write a word with your finger on {recibe}'s underwear, over their intimate area. When you finish, {recibe} says what it was."
      }
    },
    {
      "id": "DEL-SE7",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sigue con un dedo la curva de los glúteos de {recibe} por encima de su ropa interior, de un lado al otro.",
        "en": "{da}, follow the curve of {recibe}'s buttocks with one finger over their underwear, from one side to the other."
      }
    },
    {
      "id": "DEL-SE8",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con las uñas la cara interna de los muslos de {recibe}, muy suave, hasta el borde de su ropa interior.",
        "en": "{da}, run your nails along the inside of {recibe}'s thighs, very lightly, up to the edge of their underwear."
      }
    },
    {
      "id": "DEL-SE9",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dibuja con un dedo el contorno de los genitales de {recibe} por encima de la ropa, sin presionar.",
        "en": "{da}, trace the outline of {recibe}'s genitals with one finger over their clothes, without pressing."
      }
    },
    {
      "id": "DEL-SE10",
      "category": "delinear",
      "level": 1,
      "seconds": 45,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la prenda de arriba y traza con las yemas líneas lentas desde su cuello hasta su ombligo.",
        "en": "{da}, take off {recibe}'s top and draw slow lines with your fingertips from their neck to their navel."
      }
    },
    {
      "id": "DEL-AT1",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, recorre con la yema de un dedo cada pliegue y cada contorno de los genitales de {recibe}, muy despacio, piel con piel.",
        "en": "{da}, trace every fold and contour of {recibe}'s genitals with a fingertip, very slowly, skin to skin."
      },
      "variants": {
        "vulva": {
          "es": "{da}, recorre con la yema de un dedo cada pliegue de la vulva de {recibe}, muy despacio, hasta llegar a su clítoris.",
          "en": "{da}, trace every fold of {recibe}'s vulva with a fingertip, very slowly, until you reach their clitoris."
        },
        "pene": {
          "es": "{da}, recorre con la yema de un dedo el pene y los testículos de {recibe}, muy despacio, piel con piel.",
          "en": "{da}, trace {recibe}'s penis and testicles with a fingertip, very slowly, skin to skin."
        }
      }
    },
    {
      "id": "DEL-AT2",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "dedos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, introduce un dedo dentro de {recibe}, despacio, y espera a que su cuerpo te pida más.",
        "en": "{da}, with lubricant, slide one finger inside {recibe}, slowly, and wait for their body to ask for more."
      },
      "anatomy": [
        "vulva",
        "nd"
      ]
    },
    {
      "id": "DEL-AT3",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, traza círculos lentos con dos dedos sobre los genitales de {recibe}, cada vez más pequeños.",
        "en": "{da}, draw slow circles with two fingers on {recibe}'s genitals, smaller and smaller."
      }
    },
    {
      "id": "DEL-AT4",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "ropa",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la ropa interior y recorre con un dedo el interior de sus muslos hasta sus genitales, de ida y de vuelta.",
        "en": "{da}, take off {recibe}'s underwear and run one finger along their inner thighs up to their genitals, there and back."
      }
    },
    {
      "id": "DEL-AT5",
      "category": "delinear",
      "level": 2,
      "seconds": 90,
      "filters": [
        "dedos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, mueve dos dedos dentro de {recibe} a un ritmo lento y constante mientras besas su cuello.",
        "en": "{da}, with lubricant, move two fingers inside {recibe} at a slow, steady pace while you kiss their neck."
      },
      "anatomy": [
        "vulva",
        "nd"
      ]
    },
    {
      "id": "DEL-AT6",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, busca con la punta de un dedo el punto donde {recibe} más reacciona, y quédate ahí.",
        "en": "{da}, find with a fingertip the spot where {recibe} reacts most, and stay there."
      }
    },
    {
      "id": "DEL-AT7",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, recorre con un dedo los genitales de {recibe} de abajo hacia arriba, una y otra vez, muy despacio.",
        "en": "{da}, with lubricant, run one finger up {recibe}'s genitals from bottom to top, again and again, very slowly."
      }
    },
    {
      "id": "DEL-AT8",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "dedos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, introduce un dedo dentro de {recibe} y, desde ahí, traza círculos pequeños sin dejar de moverlo.",
        "en": "{da}, with lubricant, slide one finger inside {recibe} and, from there, draw small circles without stopping."
      },
      "anatomy": [
        "vulva",
        "nd"
      ]
    },
    {
      "id": "DEL-AT9",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "ropa",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} toda la ropa y traza con un dedo un camino por todo su cuerpo que termine en sus genitales.",
        "en": "{da}, take off all of {recibe}'s clothes and trace a path over their whole body with one finger that ends at their genitals."
      }
    },
    {
      "id": "DEL-AT10",
      "category": "delinear",
      "level": 2,
      "seconds": 60,
      "filters": [
        "anal",
        "dedos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, traza círculos con la yema de un dedo alrededor de la zona anal de {recibe} y, si su cuerpo lo pide, entra apenas.",
        "en": "{da}, with lubricant, draw circles with a fingertip around {recibe}'s anal area and, if their body asks for it, enter just slightly."
      }
    },
    {
      "id": "ESC-AN1",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, dale a {recibe} un masaje en los hombros, apretando y soltando con las manos enteras.",
        "en": "{da}, give {recibe} a shoulder massage, squeezing and releasing with your whole hands."
      }
    },
    {
      "id": "ESC-AN2",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea una mano de {recibe}: la palma con los pulgares y luego cada dedo, de la base a la punta.",
        "en": "{da}, massage one of {recibe}'s hands: the palm with your thumbs, then each finger, from base to tip."
      }
    },
    {
      "id": "ESC-AN3",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, apoya las manos abiertas en la espalda de {recibe} y presiona despacio, subiendo de la cintura a los hombros.",
        "en": "{da}, place your open hands on {recibe}'s back and press slowly, moving up from the waist to the shoulders."
      }
    },
    {
      "id": "ESC-AN4",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la cabeza de {recibe} con los dedos firmes, como si lavaras su cabello.",
        "en": "{da}, massage {recibe}'s head with firm fingers, as if you were washing their hair."
      }
    },
    {
      "id": "ESC-AN5",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la nuca de {recibe} con una mano mientras la otra sostiene su frente.",
        "en": "{da}, massage the back of {recibe}'s neck with one hand while the other supports their forehead."
      }
    },
    {
      "id": "ESC-AN6",
      "category": "esculpir",
      "level": 0,
      "seconds": 60,
      "filters": [
        "pies"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea los pies de {recibe}, presionando con los pulgares desde el talón hasta los dedos.",
        "en": "{da}, massage {recibe}'s feet, pressing with your thumbs from the heel to the toes."
      }
    },
    {
      "id": "ESC-AN7",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea los antebrazos de {recibe}, apretando con los pulgares desde el codo hasta la muñeca.",
        "en": "{da}, massage {recibe}'s forearms, pressing with your thumbs from the elbow to the wrist."
      }
    },
    {
      "id": "ESC-AN8",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la frente y las sienes de {recibe} con las yemas firmes, en círculos lentos.",
        "en": "{da}, massage {recibe}'s forehead and temples with firm fingertips, in slow circles."
      }
    },
    {
      "id": "ESC-AN9",
      "category": "esculpir",
      "level": 0,
      "seconds": 45,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea las piernas de {recibe} por encima de la ropa, de los tobillos a las rodillas.",
        "en": "{da}, massage {recibe}'s legs over their clothes, from the ankles to the knees."
      }
    },
    {
      "id": "ESC-AN10",
      "category": "esculpir",
      "level": 0,
      "seconds": 30,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, abraza a {recibe} por detrás y aprieta con firmeza, suelta y vuelve a apretar, como un masaje hecho con todo el cuerpo.",
        "en": "{da}, hug {recibe} from behind and squeeze firmly, release and squeeze again, like a massage done with your whole body."
      }
    },
    {
      "id": "ESC-SE1",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [
        "ropa"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} la prenda de arriba y masajea su espalda y sus costados con aceite o crema, con presión firme.",
        "en": "{da}, take off {recibe}'s top and massage their back and sides with oil or lotion, using firm pressure."
      }
    },
    {
      "id": "ESC-SE2",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea los glúteos de {recibe} con las dos manos, amasando con presión firme, por encima o por debajo de la ropa.",
        "en": "{da}, massage {recibe}'s buttocks with both hands, kneading with firm pressure, over or under their clothes."
      }
    },
    {
      "id": "ESC-SE3",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la cara interna de los muslos de {recibe}, de la rodilla hacia arriba, hasta el pliegue de la ingle.",
        "en": "{da}, massage the inside of {recibe}'s thighs, from the knee up to the crease of the groin."
      }
    },
    {
      "id": "ESC-SE4",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea el pecho de {recibe} por debajo de la ropa, con las palmas abiertas y movimientos amplios.",
        "en": "{da}, massage {recibe}'s chest under their clothes, with open palms and wide movements."
      }
    },
    {
      "id": "ESC-SE5",
      "category": "esculpir",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, apoya la palma sobre la zona íntima de {recibe}, por encima de la ropa, y presiona en círculos lentos.",
        "en": "{da}, rest your palm on {recibe}'s intimate area, over their clothes, and press in slow circles."
      }
    },
    {
      "id": "ESC-SE6",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea las caderas y el bajo vientre de {recibe}, hundiendo los pulgares despacio, sin pasar de su ropa interior.",
        "en": "{da}, massage {recibe}'s hips and lower belly, sinking your thumbs in slowly, without going past their underwear."
      }
    },
    {
      "id": "ESC-SE7",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [
        "gluteos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la parte de atrás de los muslos de {recibe}, de las rodillas a los glúteos, con presión firme.",
        "en": "{da}, massage the backs of {recibe}'s thighs, from the knees to the buttocks, with firm pressure."
      }
    },
    {
      "id": "ESC-SE8",
      "category": "esculpir",
      "level": 1,
      "seconds": 60,
      "filters": [
        "pies"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea los pies de {recibe} con aceite y sube por los tobillos hasta las pantorrillas.",
        "en": "{da}, massage {recibe}'s feet with oil and work up past the ankles to the calves."
      }
    },
    {
      "id": "ESC-SE9",
      "category": "esculpir",
      "level": 1,
      "seconds": 45,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea la ingle de {recibe} por encima de la ropa, con los pulgares, de la cadera hacia el centro.",
        "en": "{da}, massage {recibe}'s groin over their clothes with your thumbs, from the hip toward the center."
      }
    },
    {
      "id": "ESC-SE10",
      "category": "esculpir",
      "level": 1,
      "seconds": 45,
      "filters": [
        "pecho"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, siéntate detrás de {recibe} y masajea su pecho con las palmas, por encima de la ropa, despacio y con firmeza.",
        "en": "{da}, sit behind {recibe} and massage their chest with your palms, over their clothes, slowly and firmly."
      }
    },
    {
      "id": "ESC-AT1",
      "category": "esculpir",
      "level": 2,
      "seconds": 90,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, masajea los genitales de {recibe} con toda la mano, presión firme y ritmo lento.",
        "en": "{da}, with lubricant, massage {recibe}'s genitals with your whole hand, firm pressure and a slow pace."
      },
      "variants": {
        "vulva": {
          "es": "{da}, con lubricante, masajea la vulva de {recibe} con toda la mano, presión firme y ritmo lento sobre su clítoris.",
          "en": "{da}, with lubricant, massage {recibe}'s vulva with your whole hand, firm pressure and a slow pace over their clitoris."
        },
        "pene": {
          "es": "{da}, con lubricante, masajea el pene y los testículos de {recibe} con toda la mano, presión firme y ritmo lento.",
          "en": "{da}, with lubricant, massage {recibe}'s penis and testicles with your whole hand, firm pressure and a slow pace."
        }
      }
    },
    {
      "id": "ESC-AT2",
      "category": "esculpir",
      "level": 2,
      "seconds": 90,
      "filters": [
        "dedos"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, introduce dos dedos dentro de {recibe} y muévelos con un ritmo firme y constante.",
        "en": "{da}, with lubricant, slide two fingers inside {recibe} and move them with a firm, steady rhythm."
      },
      "anatomy": [
        "vulva",
        "nd"
      ]
    },
    {
      "id": "ESC-AT3",
      "category": "esculpir",
      "level": 2,
      "seconds": null,
      "filters": [
        "ropa",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} toda la ropa y dale un masaje de cuerpo entero con aceite, sin evitar ninguna zona.",
        "en": "{da}, take off all of {recibe}'s clothes and give them a full-body oil massage, avoiding no area."
      }
    },
    {
      "id": "ESC-AT4",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "gluteos",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea los glúteos de {recibe} sin ropa y deja que tus manos bajen entre sus piernas cada tanto.",
        "en": "{da}, massage {recibe}'s bare buttocks and let your hands slip between their legs every so often."
      }
    },
    {
      "id": "ESC-AT5",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, masajea el bajo vientre de {recibe} con la palma y baja poco a poco hasta sus genitales, sin aflojar la presión.",
        "en": "{da}, massage {recibe}'s lower belly with your palm and move down little by little to their genitals, without easing the pressure."
      }
    },
    {
      "id": "ESC-AT6",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, toma la mano de {recibe} y guíala sobre sus propios genitales, marcando tú la presión y el ritmo.",
        "en": "{da}, take {recibe}'s hand and guide it over their own genitals, setting the pressure and rhythm yourself."
      }
    },
    {
      "id": "ESC-AT7",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con aceite, masajea la cara interna de los muslos de {recibe} y deja que tus pulgares rocen sus genitales en cada pasada.",
        "en": "{da}, with oil, massage the inside of {recibe}'s thighs and let your thumbs brush their genitals on every pass."
      }
    },
    {
      "id": "ESC-AT8",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, sujeta las caderas de {recibe} con firmeza y marca tú el ritmo mientras frotan sus genitales, sin penetración.",
        "en": "{da}, hold {recibe}'s hips firmly and set the rhythm while you rub your genitals together, without penetration."
      }
    },
    {
      "id": "ESC-AT9",
      "category": "esculpir",
      "level": 2,
      "seconds": 90,
      "filters": [
        "ropa",
        "gluteos",
        "genitales"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, quítale a {recibe} toda la ropa y masajea sus glúteos y su espalda baja con aceite, bajando entre sus piernas al final de cada pasada.",
        "en": "{da}, take off all of {recibe}'s clothes and massage their buttocks and lower back with oil, slipping between their legs at the end of each stroke."
      }
    },
    {
      "id": "ESC-AT10",
      "category": "esculpir",
      "level": 2,
      "seconds": 60,
      "filters": [
        "anal"
      ],
      "avoidStyles": [],
      "text": {
        "es": "{da}, con lubricante, masajea la zona anal de {recibe} con la yema del pulgar, con presión suave y constante.",
        "en": "{da}, with lubricant, massage {recibe}'s anal area with the pad of your thumb, using soft, steady pressure."
      }
    }
  ]
});
window.TryMeRollCards=Object.freeze(window.TryMeRollCatalog.cards);
