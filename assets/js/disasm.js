import * as zy from "https://www.unpkg.com/zydis.js/zydis.min.js";

function debounce(callback, delay) {
    let timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

var architecture = "x64";

const disasm_input = document.getElementById("disasm-input");
const x64_button = document.getElementById("x64-btn");
const x86_button = document.getElementById("x86-btn");

x64_button.addEventListener("click", function() {
    architecture = "x64";

    // refresh output.
    disassemble_input();
});

x86_button.addEventListener("click", function() {
    architecture = "x86";

    // refresh output.
    disassemble_input();
});

function disassemble_input() {
    const fmt = zy.Formatter.intel();

    const insn_hex = disasm_input.value;
    const insn_bytes = new Uint8Array(insn_hex.match(/[\da-f]{2}/gi).map(h => {
        return parseInt(h, 16)
    }));

    let dec = null;

    if (architecture == "x64")
        dec = new zy.Decoder(zy.MachineMode.LONG_64, zy.StackWidth.WIDTH_64);
    else if (architecture == "x86")
        dec = new zy.Decoder(zy.MachineMode.LONG_COMPAT_32, zy.StackWidth.WIDTH_32);

    let fmt_buf = '';

    for (let pc = 0; pc < insn_bytes.length;) {
        const bytes = insn_bytes.slice(pc);

        try {
            const ins = dec.decode(bytes);
            const ins_text = fmt.insn(ins, 0x0n);
            fmt_buf += `${ins_text}\n`;
            pc += ins.length;
        } catch (e) {
            console.log(e);
            fmt_buf += `db ${bytes[0].toString(16).padStart(2, '0')}\n`;
            pc++;
        }
    }

    document.getElementById('disasm-output').value = fmt_buf;
}

// const asm_input = document.getElementById("asm-input");
        
// function assemble_line(line) {
//     const tokens = line.split(' ');
//     const mnemonic = tokens[0];
//     const operands = tokens.slice(1);

//     operands[0] = operands[0].replace(/,/g, '');

//     return [mnemonic, operands[0], operands[1]];
// }

// function operand_has_value(operand) {
//     return operand.startsWith('0x') || operand.startsWith('0X');
// }

// function assemble_input() {
//     const lines = asm_input.value.split('\n');

//     for (const line of lines) {
//         var asm = assemble_line(line);
//         var mnemonic = get_mnemonic(asm[0]);

//         const enc = new zy.EncoderRequest();

//         if (mnemonic == zy.Mnemonic.INVALID) {
//             console.log("Invalid mnemonic: " + asm[0]);
//             break;
//         }
//     }
// }
  

disasm_input.addEventListener(
    "keyup",
    debounce(disassemble_input, 600)
);

disasm_input.focus();

// asm_input.addEventListener(
//     "keyup",
//     debounce(assemble_input, 700)
// );

// asm_input.focus();