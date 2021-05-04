#!/usr/bin/env node

const fs = require("fs");
const { bold, green, red } = require("kleur");
const path = require("path");
const meow = require("meow");
const { default: openapiTS } = require("../dist/cjs/index.js");

const cli = meow(
  `Usage
  $ openapi-typescript [input] [options]

Options
  --help                       display this
  --output, -o                 Specify output file (default: stdout)
  --auth                       (optional) Provide an authentication token for private URL
  --immutable-types, -it       (optional) Generates immutable types (readonly properties and readonly array)
  --additional-properties, -ap (optional) Allow arbitrary properties for all schema objects without "additionalProperties: false"
  --prettier-config, -c        (optional) specify path to Prettier config file
  --raw-schema                 (optional) Parse as partial schema (raw components)
  --version                    (optional) Force schema parsing version
`,
  {
    flags: {
      output: {
        type: "string",
        alias: "o",
      },
      auth: {
        type: "string",
      },
      immutableTypes: {
        type: "boolean",
        alias: "it",
      },
      additionalProperties: {
        type: "boolean",
        alias: "ap",
      },
      prettierConfig: {
        type: "string",
        alias: "c",
      },
      rawSchema: {
        type: "boolean",
      },
      version: {
        type: "number",
      },
    },
  }
);

const timeStart = process.hrtime();

async function main() {
  let output = "FILE"; // FILE or STDOUT
  const pathToSpec = cli.input[0];

  if (!cli.flags.output) {
    output = "STDOUT"; // if --output not specified, fall back to stdout
  }
  if (output === "FILE") {
    console.info(bold(`✨ openapi-typescript ${require("../package.json").version}`)); // don’t log anything to console!
  }
  if (cli.flags.rawSchema && !cli.flags.version) {
    throw new Error(`--raw-schema requires --version flag`);
  }

<<<<<<< HEAD
  // 1. input
  let spec = undefined;
  try {
    spec = await loadSpec(pathToSpec, {
      auth: cli.flags.auth,
      log: output !== "STDOUT",
    });
  } catch (err) {
    process.exitCode = 1; // needed for async functions
    throw new Error(red(`❌ ${err}`));
  }

  // 2. generate schema (the main part!)
  const result = openapiTS(spec, {
    auth: cli.flags.auth,
    additionalProperties: cli.flags.additionalProperties,
=======
  const result = await openapiTS(pathToSpec, {
    auth: cli.flags.auth,
    silent: output === "STDOUT",
>>>>>>> 3ea8d8f (Absorb schema loading/parsing into Node API)
    immutableTypes: cli.flags.immutableTypes,
    prettierConfig: cli.flags.prettierConfig,
    rawSchema: cli.flags.rawSchema,
    version: cli.flags.version,
  });

  if (output === "FILE") {
    // output option 1: file
    const outputFile = path.resolve(process.cwd(), cli.flags.output);

    await fs.promises.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.promises.writeFile(outputFile, result, "utf8");

    const timeEnd = process.hrtime(timeStart);
    const time = timeEnd[0] + Math.round(timeEnd[1] / 1e6);
    console.log(green(`🚀 ${pathToSpec} -> ${bold(cli.flags.output)} [${time}ms]`));
  } else {
    // output option 2: stdout
    process.stdout.write(result);
    // (still) don’t log anything to console!
  }

  return result;
}

main();
