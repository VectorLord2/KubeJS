/*
===========================================================
 diamond.js — Custom KubeJS + LootJS Config
-----------------------------------------------------------
✅ Adds / Reworks Recipes:
 - Ars Nouveau enchanting apparatus: Magical Eye
 - Create mechanical crafting: Tempad (Radiant & Shadow casings)
 - Create crushing: Old Eye
 - Create mechanical crafting: Shadow Steel Casing
 - Create mechanical crafting: Radiant Casing
 - Shapeless Eye Recipes:
   • Cold Eye
   • Cursed Eye
   • Nether Eye
   • Exotic Eye
   • Witch Eye
   • Shadow Orb
 - Ars Nouveau Archmage & Novice Spell Books
 - Building Gadgets rework (custom brass casing recipes)

✅ Removes:
 - All End Remastered recipes
 - Misc items: Depths Key, Tempad, Exodium Shield Necklace
 - Broken/invalid recipes:
   • cozy_home: andesite brick to block
   • createcasing: creative zinc chain drive
   • alexsdelight: barbecue on a stick

✅ Loot Changes:
 - Rogue Eye: dungeon_now_loading fairkeeper chest (10%)
 - Evil Eye: Aether silver chest (100%)
 - Add mob/chest drops for Corrupted Eye, Lost Eye,
   Guardian Eye, Wither Eye, Undead Eye, Black Eye
 - Remove End Remastered loot tables + specific relics
===========================================================
*/

ServerEvents.recipes((event) => {
  // !! magical eye enchanting apparatus recipe
  event.recipes.ars_nouveau
    .enchanting_apparatus(
      ["eeeabsmobs:ancient_drive_crystal"], // pedestal item
      "minecraft:ender_eye", // input
      "endrem:magical_eye", // output
      10000 // source cost
    )
    .id("custom:magical_eye_enchanting");

  // !! Tempad enchanting apparatus recipe
  event.recipes.ars_nouveau
    .enchanting_apparatus(
      ["alexsmobs:void_worm_eye"], // pedestal item
      "tempad:tempad", // input
      "tempad:he_who_remains_tempad", // output
      10000 // source cost
    )
    .id("custom:tempad_enchanting");

  //! tempad crafting
  event.recipes.create.mechanical_crafting(
    "tempad:tempad",
    ["RRR", "RBR", "RSE"],
    {
      R: "create:refined_radiance_casing",
      B: "powah:battery_hardened",
      S: "ae2:singularity",
      E: "unearthed_journey:eye_of_methuselah",
    }
  );
  event.recipes.create.mechanical_crafting(
    "tempad:tempad",
    ["RRR", "RBR", "RSE"],
    {
      R: "create:shadow_steel_casing",
      B: "powah:battery_hardened",
      S: "ae2:singularity",
      E: "unearthed_journey:eye_of_methuselah",
    }
  );

  //! old eye create crushing recipe
  event.recipes.create.crushing(
    "endrem:old_eye",
    "cataclysm:necklace_of_the_desert"
  );

  //! shadow steel mechanical casing recipe
  event.recipes.create.mechanical_crafting(
    "create:shadow_steel_casing",
    ["ABA", "DDD", "DDD"],
    {
      D: "create:brass_casing",
      A: "create:shadow_steel",
      B: "minecraft:obsidian",
    }
  );

  //! radiant casing mechanical crafting recipe
  event.recipes.create.mechanical_crafting(
    "create:refined_radiance_casing",
    ["BBB", "BRG", "BRB"],
    {
      B: "create:brass_casing",
      R: "create:refined_radiance",
      G: "minecraft:glass",
    }
  );

  //! shapeless recipes (all grouped)
  // coldeye
  event
    .shapeless("endrem:cold_eye", [
      "mowziesmobs:ice_crystal",
      "block_factorys_bosses:frozen_fist",
      "snuffles:snuffle_fluff",
      "snuffles:snuffle_fluff",
      "snuffles:snuffle_fluff",
      "snuffles:snuffle_fluff",
      "snuffles:snuffle_fluff",
      "snuffles:snuffle_fluff",
      "minecraft:ender_eye",
    ])
    .id("custom:cold_eye_recipe");

  // curse eye
  event.remove({ output: "endrem:cursed_eye" });
  event
    .shapeless("endrem:cursed_eye", [
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:pure_darkness",
      "alexscaves:beholder",
      "minecraft:ender_eye",
    ])
    .id("custom:cursed_eye_recipe");

  // nether eye
  event.remove({ output: "endrem:nether_eye" });
  event
    .shapeless("endrem:nether_eye", [
      "netherexp:treacherous_flame",
      "netherexp:treacherous_flame",
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_bone",
      "minecraft:ender_eye",
    ])
    .id("custom:nether_eye_recipe");

  // Archmage Spell Book
  event.remove({ output: "ars_nouveau:archmage_spell_book" });
  event
    .shapeless("ars_nouveau:archmage_spell_book", [
      "ars_nouveau:apprentice_spell_book",
      "dungeonnowloading:chaotic_hexahedron",
      "rats:plague_tome",
      "terramity:antiprism",
      "mowziesmobs:earthrend_gauntlet",
      "mowziesmobs:sol_visage",
      "ars_elemental:mark_of_mastery",
      "irons_spellbooks:eldritch_manuscript",
      "minecraft:nether_star",
    ])
    .id("custom:archmage_spell_book_recipe");

  // Novice Spell Book
  event.remove({ output: "ars_nouveau:novice_spell_book" });
  event
    .shapeless("2x ars_nouveau:novice_spell_book", [
      "minecraft:book",
      "ars_nouveau:novice_spell_book",
    ])
    .id("custom:novice_spell_book_recipe");

  // Shadow Orb
  event.remove({ output: "darkdoppelganger:shadow_orb" });
  event
    .shapeless("darkdoppelganger:shadow_orb", [
      "callfromthedepth_:lostsoulsupgradesmithingtemplate",
      "endrem:cryptic_eye",
      "endrem:guardian_eye",
      "endrem:corrupted_eye",
      "endrem:black_eye",
      "endrem:cursed_eye",
      "alexsmobs:void_worm_eye",
      "twilightforest:cube_of_annihilation",
      "enigmaticlegacy:enigmatic_eye",
    ])
    .id("custom:shadow_orb_recipe");

  // Exotic Eye
  //  event.remove({ output: "endrem:exotic_eye" });
  //  event
  //    .shapeless("endrem:exotic_eye", [
  //      "ars_nouveau:water_essence",
  //      "cataclysm:coral_chunk",
  //      "alexscaves:gazing_pearl",
  //      "create_aquatic_ambitions:conduit_cage",
  //    ])
  //    .id("custom:exotic_eye_recipe");

  // Exotic eye
  // event.remove({ output: "endrem:exotic_eye" });
  // event.shapeless("endrem:exotic_eye", [
  //   "ars_nouveauLwater_essence",
  //   "cataclysm:coral_chunk",
  //   "alexcaves:gazing_pearl",
  //   "create_aquatic_ambitions:conduit_cage",
  // ]);

  // Witch Eye
  event.remove({ output: "endrem:witch_eye" });
  event
    .shapeless("endrem:witch_eye", [
      "minecraft:ender_eye",
      "mekanism:alloy_atomic", // Note: alloy_atomic, not atomic_alloy
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
      "mekanism:alloy_atomic",
    ])
    .id("custom:witch_eye_recipe");

  //! remove endrem recipes entirely
  event.remove({ mod: "endremastered" });
  event.remove({ output: "endrem:undead_eye" });

  //! remove misc crafting recipes
  event.remove({ output: "callfromthedepth_:depth" });
  event.remove({ output: "tempad:tempad" });
  event.remove({ output: "terramity:exodium_shield_amulet" });
  event.remove({ output: "terramity:lucky_dice" });
  event.remove({ output: "terramity:poker_chip_bracelets" });
  event.remove({ output: "terramity:chthonic_curse_bracelets" });
  event.remove({ output: "terramity:exodium_twin_bracelets" });
  event.remove({ output: "terramity:fateful_coin" });

  //! building gadgets rework recipes
  event.remove({ output: "buildinggadgets2:gadget_building" });
  event.remove({ output: "buildinggadgets2:gadget_copy_paste" });
  event.remove({ output: "buildinggadgets2:gadget_cut_paste" });
  event.remove({ output: "buildinggadgets2:gadget_destruction" });
  event.remove({ output: "buildinggadgets2:gadget_exchanging" });

  event
    .shaped("endrem:exotic_eye", ["CWC", "CGC", "CMC"], {
      C: "cataclysm:coral_chunk",
      W: "ars_nouveau:water_essence",
      G: "alexscaves:gazing_pearl",
      M: "create_aquatic_ambitions:mechanical_conduit",
    })
    .id("custom:exotic_eye");

  event
    .shaped("buildinggadgets2:gadget_building", ["BCB", "CRC", "BCB"], {
      B: "create:brass_casing",
      C: "minecraft:redstone",
      R: "minecraft:diamond",
    })
    .id("custom:building_gadget_brass");

  event
    .shaped("buildinggadgets2:gadget_copy_paste", ["BCB", "CEC", "BCB"], {
      B: "create:brass_casing",
      C: "minecraft:redstone",
      E: "minecraft:emerald",
    })
    .id("custom:copy_paste_gadget_brass");

  event
    .shaped("buildinggadgets2:gadget_cut_paste", ["BCB", "CSC", "BCB"], {
      B: "create:brass_casing",
      C: "minecraft:redstone",
      S: "minecraft:shears",
    })
    .id("custom:cut_paste_gadget_brass");

  event
    .shaped("buildinggadgets2:gadget_destruction", ["BCB", "CTC", "BCB"], {
      B: "create:brass_casing",
      C: "minecraft:redstone",
      T: "minecraft:tnt",
    })
    .id("custom:destruction_gadget_brass");

  event
    .shaped("buildinggadgets2:gadget_exchanging", ["BCB", "CPC", "BCB"], {
      B: "create:brass_casing",
      C: "minecraft:redstone",
      P: "minecraft:piston",
    })
    .id("custom:exchanging_gadget_brass");

  //! remove broken external recipes
  event.remove({ id: "cozy_home:andesite_brick_to_block_recipe" });
  event.remove({ id: "createcasing:crafting/chain_drive/creative_from_zinc" });
  event.remove({ id: "alexsdelight:barbecue_on_a_stick" });
});

LootJS.modifiers((event) => {
  //! rogue eye modifier
  event
    .addLootTableModifier("dungeon_now_loading:fairkeeper_chest")
    .addLoot("endrem:rogue_eye")
    .randomChance(0.1);

  //! remove endrem loot tables
  //   event.removeLoot("endrem:chests/*");
  //   event.removeLoot("endrem:loot_tables/*");

  //! remove specific loot
  //  event.removeLoot("relics:infinity_ham");
  //  event.removeLoot("relics:holy_locket")

  //! adding loot tables
  event
    .addEntityLootModifier("illageandspillage:ragno")
    .killedByPlayer()
    .addLoot("endrem:corrupted_eye");
  event
    .addEntityLootModifier("block_factorys_bosses:underworld_knight")
    .killedByPlayer()
    .addLoot("endrem:lost_eye");
  event
    .addEntityLootModifier("twilight_forest_final_boss:castle_keeper")
    .killedByPlayer()
    .addLoot("endrem:guardian_eye");
  event
    .addEntityLootModifier("cataclysm:the_harbinger")
    .killedByPlayer()
    .addLoot("endrem:wither_eye");
  event
    .addEntityLootModifier("jeg:terror_phantom")
    .killedByPlayer()
    .addLoot("endrem:undead_eye");
  event
    .addEntityLootModifier("aether:valkyrie_queen")
    .killedByPlayer()
    .addLoot("endrem:evil_eye");
  event
    .addEntityLootModifier("aquamirae:captain_cornelia")
    .killedByPlayer()
    .addLoot("endrem:black_eye");
  //  event
  //    .addEntityLootModifier('terramity:ultra_sniffer')
  //    .removeloot('terramity:ultra_sniffer_fur');
});

//LootJS.events.addLootTableModification(event => {
//  event.modifyEntity('terramity:ultra_sniffer', lootTable => {
//    lootTable.removeItems([
//      'terramity:ultra_sniffer_fur'
//    ]);
//  });
//});

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("terramity:ultra_sniffer")
    .removeLoot("terramity:ultra_sniffer_fur");
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier("minecraft:chests/*")
    .removeLoot("relics:infinity_ham");
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier("minecraft:chests/*")
    .removeLoot("relics:holy_locket");
});

//LootJS.modifiers(event => {
//event.getLootTable("minecraft:chests/*").removeItem("relics:holy_locket");});
