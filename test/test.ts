// deno test methods
import { assertEquals } from "../deps.ts";

// the module to be tested
import { test } from "../mod.ts";

Deno.test( "test reaching dallmo-util-timer", () => {

  assertEquals( test(), "ok");

}); // Deno.test

