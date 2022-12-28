attributes = {
  'characters': [
    "Luke Skywalker",
    "Captain James T. Kirk",
    "Han Solo",
    "Ellen Ripley",
    "Dr. Emmett Brown",
    "Sam Bell",
    "Dr. David Bowman",
    "Dr. Ryan Stone",
    "The Fifth Element",
    "Dr. Neo Cortex"
],
'space_weapons': [
    "Lightsaber",
    "Phaser",
    "Proton Pack",
    "M41A Pulse Rifle",
    "Plasma Cannon",
    "Ion Cannon",
    "Graviton Gun",
    "Zero Point Energy Field Manipulator",
    "Death Star",
    "Stargun"
],
  'rarity': list(range(6)),
}

import random
import time

def toMeta():
  return [
    {
      'trait_type': 'Character',
      'value': random.choice(attributes['characters']),
    },
    {
      'trait_type': 'Weapon',
      'value': random.choice(attributes['space_weapons']),
    },
    {
      'trait_type': 'Rarity',
      'value': random.choice(attributes['rarity']),
      'max_value': 10,
    },
    {
      'display_type': 'date',
      'trait_type': 'Created',
      'value': time.time() * 1000,
    },
    {
      'display_type': 'number',
      'trait_type': 'generation',
      'value': 1,
    },
  ]
