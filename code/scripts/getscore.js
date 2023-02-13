import { world } from "@minecraft/server";

export function getScore(entity, objective) {
  try {
    return world.scoreboard.getObjective(objective)?.getScore(entity.scoreboard);
  } catch {
    return 0;
  }
}
