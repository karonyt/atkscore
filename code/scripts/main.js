import { world } from "@minecraft/server";
import { getScore } from "getscore.js";

world.events.entityHurt.subscribe(ev => {
  let d = 1
  d = getScore(ev.damagingEntity, "atk" )
  d = ( d - 1 ) * 2
  const def = ev.hurtEntity
  const atk = ev.damagingEntity
  def.runCommandAsync(`effect @s instant_health 0`)
  def.runCommandAsync(`effect @s instant_damage 0`)
  def.runCommandAsync(`damage @s ${d} entity_attack entity @e[c=1,name="${atk.nameTag}",type=${atk.typeId}]`)
})
