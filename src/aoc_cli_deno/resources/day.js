const PROD = false;
const TEST_INPUT = ``
const INPUT = PROD ? await Deno.readTextFile("./input.txt") : TEST_INPUT;


function part1() {
    throw Error("NotImplemented");
}

function part2() {
    throw Error("NotImplemented");
}


function main() {
    const part = Deno.args[0];
    console.log(part)
    const parts = {
        '1': part1,
        '2': part2,
    }
    console.log(`Day: XXDAYXX Part: ${part}`);
    console.log(parts[part]());
}

main();