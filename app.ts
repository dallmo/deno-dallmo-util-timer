
/*
 * @module dallmo-util-timer
 */

const default_sleep_s: number  = 1;
const default_sleep_ms: number = 1000;

/////////////////////////////////////////////////////////////////////
async function wait_ms( sleep_interval?: number ){

  /**
   * wait for some milliseconds
   */
  if( typeof( sleep_interval ) == "undefined" ){
    sleep_interval = default_sleep_ms;
  }; // if
  await setTimeout( sleep_interval );

}; // wait
/////////////////////////////////////////////////////////////////////
async function wait_s( sleep_interval?: number ){

  /**
   * wait for some seconds
   */
  if( typeof( sleep_interval ) == "undefined" ){
    sleep_interval = default_sleep_s;
  }; // if

  await wait_ms( sleep_interval*1000 );

}; // function wait_s
const wait = wait_s;
//////////////////////////////////////////////////////////////
/*
 * @function test
 * @params {undefined} - no inputs required
 * @returns {string}
 */
function test(): string{

  return "ok";

}// function test
//////////////////////////////////////////////////////////////
export {

  test,

}; // export

