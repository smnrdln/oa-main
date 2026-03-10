i18n.registerContent('en', 'scenarios', [
    // ═══════════════════════════════════════════
    // LEVEL 1 — Beginner Scenarios (8, 1 per topic)
    // ═══════════════════════════════════════════
    {
        level: 'level1', topicIndex: 0,
        title: 'Voltage Divider for ADC',
        description: 'You need to measure a 0–12V battery voltage with a 3.3V ADC. What voltage divider ratio do you need?',
        choices: [
            { text: 'Divide by 2 (R1=R2)', correct: false, xp: 0 },
            { text: 'Divide by ~3.64 (e.g., R1=10kΩ, R2=3.9kΩ)', correct: true, xp: 15 },
            { text: 'Multiply by 3.3', correct: false, xp: 0 },
            { text: 'No divider needed — connect directly', correct: false, xp: 0 }
        ],
        explanation: 'V_out = V_in × R2/(R1+R2). To scale 12V → 3.3V: ratio ≈ 3.3/12 ≈ 0.275. With R1=10kΩ, R2=3.9kΩ: V_out = 12 × 3.9/13.9 ≈ 3.37V. Never exceed ADC max input!'
    },
    {
        level: 'level1', topicIndex: 1,
        title: "LED Won't Light Up",
        description: "You've built a simple LED circuit with a 9V battery and a resistor, but the LED doesn't light up. What should you check first?",
        choices: [
            { text: 'Check LED polarity (anode to +, cathode to −)', correct: true, xp: 15 },
            { text: 'Replace the battery with a 12V one', correct: false, xp: 0 },
            { text: 'Remove the resistor to allow more current', correct: false, xp: 0 },
            { text: 'Use a different color LED', correct: false, xp: 0 }
        ],
        explanation: 'LEDs are polarized — the longer leg (anode) connects to positive through a current-limiting resistor, and the shorter leg (cathode) to ground. Reversed polarity = no light.'
    },
    {
        level: 'level1', topicIndex: 2,
        title: 'Noisy Sensor Readings',
        description: 'Your analog temperature sensor (TMP36) connected to an Arduino ADC gives wildly fluctuating readings. The wiring looks correct. What analog circuit technique should you apply?',
        choices: [
            { text: 'Add a low-pass RC filter (e.g., 1kΩ + 100nF) between sensor output and ADC', correct: true, xp: 15 },
            { text: 'Increase the supply voltage to 12V', correct: false, xp: 0 },
            { text: 'Use a longer wire to the sensor', correct: false, xp: 0 },
            { text: 'Read the ADC faster to average out noise', correct: false, xp: 0 }
        ],
        explanation: 'An RC low-pass filter attenuates high-frequency noise before it reaches the ADC. With R=1kΩ and C=100nF, cutoff is ~1.6kHz — far above the slowly changing temperature signal.'
    },
    {
        level: 'level1', topicIndex: 3,
        title: 'Mystery Logic Gate Output',
        description: 'You have a gate with inputs A=1, B=0 and the output is 1. When both inputs are 1, the output is 0. What gate is this?',
        choices: [
            { text: 'AND gate', correct: false, xp: 0 },
            { text: 'OR gate', correct: false, xp: 0 },
            { text: 'NAND gate', correct: true, xp: 15 },
            { text: 'XOR gate', correct: false, xp: 0 }
        ],
        explanation: 'NAND outputs 0 only when ALL inputs are 1. For inputs (1,0)→1 and (1,1)→0, this matches the NAND truth table exactly.'
    },
    {
        level: 'level1', topicIndex: 4,
        title: 'Oscilloscope Shows Nothing',
        description: 'You connect your oscilloscope probe to a 1kHz PWM signal, but the display shows a flat line. The circuit is working (LED is blinking). What is most likely wrong?',
        choices: [
            { text: 'The ground clip is not connected to the circuit ground', correct: true, xp: 15 },
            { text: 'The oscilloscope is broken', correct: false, xp: 0 },
            { text: 'PWM signals cannot be measured with an oscilloscope', correct: false, xp: 0 },
            { text: 'The frequency is too high for the scope', correct: false, xp: 0 }
        ],
        explanation: 'The oscilloscope measures the voltage difference between the probe tip and its ground clip. Without a ground reference connected to the circuit, no meaningful signal can be measured.'
    },
    {
        level: 'level1', topicIndex: 5,
        title: 'First PCB — How Many Layers?',
        description: "You're designing your first PCB: a simple Arduino shield with 5 LEDs and 3 buttons. How many copper layers should you choose?",
        choices: [
            { text: '1 layer (single-sided)', correct: false, xp: 0 },
            { text: '2 layers (top + bottom)', correct: true, xp: 15 },
            { text: '4 layers', correct: false, xp: 0 },
            { text: '6 layers', correct: false, xp: 0 }
        ],
        explanation: '2-layer is the sweet spot for simple projects — affordable at budget fabs, with a ground plane on the bottom for good return paths. 1-layer is too restrictive; 4+ is overkill here.'
    },
    {
        level: 'level1', topicIndex: 6,
        title: 'KiCad ERC Shows "Unconnected Pin"',
        description: 'Your KiCad schematic passes ERC except for 3 "unconnected pin" warnings on an IC. The pins are labeled NC (No Connect) in the datasheet. How should you fix this?',
        choices: [
            { text: 'Ignore the warnings and proceed to layout', correct: false, xp: 0 },
            { text: 'Connect the NC pins to ground', correct: false, xp: 0 },
            { text: 'Add a "no connect" flag (X) to each NC pin in the schematic', correct: true, xp: 15 },
            { text: 'Delete the component and use a different one', correct: false, xp: 0 }
        ],
        explanation: "KiCad's \"no connect\" flag (X symbol) explicitly tells ERC that the pin is intentionally unconnected. This is proper schematic practice — never ignore ERC warnings."
    },
    {
        level: 'level1', topicIndex: 7,
        title: "Breadboard Circuit Works, PCB Doesn't",
        description: 'Your LED blinker works perfectly on a breadboard, but when you solder it on perfboard, the LED stays constantly on. What should you check?',
        choices: [
            { text: 'Check for accidental solder bridges between adjacent pads', correct: true, xp: 15 },
            { text: 'The perfboard material is blocking current', correct: false, xp: 0 },
            { text: 'Solder changes the resistance of wires', correct: false, xp: 0 },
            { text: "LEDs don't work on perfboard", correct: false, xp: 0 }
        ],
        explanation: 'Solder bridges (unintended connections between pads) are the most common perfboard issue. Use a magnifier to inspect joints and check continuity with a multimeter.'
    },
    {
        level: 'level1', topicIndex: 8,
        title: 'SMD Component Tombstoning',
        description: 'You\'re reflow soldering 0805 capacitors on your first SMD board. After reflow, several capacitors are standing on end ("tombstoned"). What caused this?',
        choices: [
            { text: 'Uneven solder paste on the two pads — one side has more paste and pulls the component upright during reflow', correct: true, xp: 15 },
            { text: 'The oven was too cold', correct: false, xp: 0 },
            { text: 'The capacitors are defective', correct: false, xp: 0 },
            { text: 'The PCB is too thick', correct: false, xp: 0 }
        ],
        explanation: 'Tombstoning occurs when surface tension is unequal on the two pads. Causes: unequal paste, asymmetric pad sizes, or unequal thermal mass. Fix by ensuring symmetric pad design and equal paste deposition.'
    },

    // ═══════════════════════════════════════════
    // LEVEL 2 — Intermediate Scenarios (8, 1 per topic)
    // ═══════════════════════════════════════════
    {
        level: 'level2', topicIndex: 0,
        title: 'LDO Extremely Hot',
        description: 'Your AMS1117 LDO converting 12V to 3.3V at 400mA is dangerously hot. What is the power dissipation and what should you do?',
        choices: [
            { text: '3.48W dissipation — switch to a buck converter for this voltage drop', correct: true, xp: 25 },
            { text: '1.32W — add a bigger heatsink', correct: false, xp: 0 },
            { text: '0.4W — this is normal', correct: false, xp: 0 },
            { text: '12W — the chip is defective', correct: false, xp: 0 }
        ],
        explanation: 'P = (V_in - V_out) × I = (12 - 3.3) × 0.4 = 3.48W. That is a lot of heat for a small IC! A buck converter at 90% efficiency would dissipate only ~0.15W.'
    },
    {
        level: 'level2', topicIndex: 1,
        title: 'SPI Sensor Returns All Zeros',
        description: 'Your SPI accelerometer returns 0x00 on every register read. The logic analyzer shows MOSI data going out, SCK toggling, and CS going low. MISO stays flat at 0V. What is wrong?',
        choices: [
            { text: 'SPI clock polarity (CPOL) or phase (CPHA) mismatch', correct: true, xp: 25 },
            { text: 'The accelerometer needs I2C, not SPI', correct: false, xp: 0 },
            { text: 'MOSI and SCK are swapped', correct: false, xp: 0 },
            { text: 'CS needs to be held high', correct: false, xp: 0 }
        ],
        explanation: "SPI has 4 modes (CPOL/CPHA combinations). If the mode doesn't match the sensor's datasheet spec, data is sampled at the wrong clock edge, causing all-zero reads."
    },
    {
        level: 'level2', topicIndex: 2,
        title: 'Buck Converter Output is Noisy',
        description: 'Your LM2596 buck converter outputs 5V but the oscilloscope shows 200mV peak-to-peak ripple on the output. Your MCU has intermittent resets. How do you fix the ripple?',
        choices: [
            { text: 'Add a larger output capacitor (220µF low-ESR electrolytic) and place it close to the IC', correct: true, xp: 25 },
            { text: 'Remove the inductor', correct: false, xp: 0 },
            { text: 'Increase the input voltage', correct: false, xp: 0 },
            { text: 'Add a resistor in series with the output', correct: false, xp: 0 }
        ],
        explanation: 'Buck converter ripple is reduced by larger L and C values. A low-ESR output capacitor close to the IC is critical. Also ensure the input cap is adequate and the hot loop area is minimized.'
    },
    {
        level: 'level2', topicIndex: 3,
        title: "MCU Won't Boot",
        description: "Your custom STM32 board powers on (3.3V rail measures correctly) but the MCU won't respond to the SWD programmer. What is the most likely issue?",
        choices: [
            { text: 'Missing or incorrectly placed decoupling capacitors', correct: true, xp: 25 },
            { text: 'USB cable is wrong type', correct: false, xp: 0 },
            { text: 'Wrong resistor color on LED', correct: false, xp: 0 },
            { text: 'Board is the wrong color', correct: false, xp: 0 }
        ],
        explanation: 'Decoupling capacitors (100nF per VDD pin + bulk) are critical for MCU stability. Also check: BOOT0 pin state, reset circuit, and crystal connections.'
    },
    {
        level: 'level2', topicIndex: 4,
        title: 'I2C Sensor Not Responding',
        description: 'Your BMP280 barometer on an I2C bus returns NAK (no acknowledge) to every address scan. The sensor is wired to SDA and SCL with the correct address. What is likely missing?',
        choices: [
            { text: 'Pull-up resistors on SDA and SCL', correct: true, xp: 25 },
            { text: 'A clock signal on a third wire', correct: false, xp: 0 },
            { text: 'A chip select pin connection', correct: false, xp: 0 },
            { text: 'A firmware update for the sensor', correct: false, xp: 0 }
        ],
        explanation: 'I2C is open-drain — without pull-up resistors (2.2kΩ–10kΩ to VCC), the lines cannot be pulled high, so no communication occurs. This is the #1 I2C debugging issue.'
    },
    {
        level: 'level2', topicIndex: 5,
        title: 'Motor Driver Overheating',
        description: 'Your H-bridge motor driver gets extremely hot within seconds of operation, even with no mechanical load on the motor. What should you investigate?',
        choices: [
            { text: 'Check for shoot-through (both high & low side conducting simultaneously)', correct: true, xp: 25 },
            { text: 'Use a larger motor', correct: false, xp: 0 },
            { text: 'Reduce the supply voltage to 1V', correct: false, xp: 0 },
            { text: 'Remove the heatsink to observe better', correct: false, xp: 0 }
        ],
        explanation: 'Shoot-through occurs when high-side and low-side FETs conduct at the same time, creating a short across the supply. Implement dead-time: 50–200ns gap between switch transitions.'
    },
    {
        level: 'level2', topicIndex: 6,
        title: 'Critical Component Out of Stock',
        description: "You're about to order your PCB assembly and discover your main MCU (STM32F411) has 26-week lead time at all distributors. What is the best immediate action?",
        choices: [
            { text: 'Wait 26 weeks for stock to return', correct: false, xp: 0 },
            { text: 'Check for pin-compatible alternates (STM32F401) and verify footprint and feature compatibility', correct: true, xp: 25 },
            { text: 'Buy from an unverified e-commerce marketplace', correct: false, xp: 0 },
            { text: 'Abandon the project', correct: false, xp: 0 }
        ],
        explanation: 'STM32 families often have pin-compatible variants. Check for alternates in the same package with compatible peripherals. Always dual-source critical parts in the BOM from the start.'
    },
    {
        level: 'level2', topicIndex: 7,
        title: 'CAN Bus Communication Fails',
        description: 'Two STM32 boards communicate over CAN bus. Board A sends frames and the TX LED blinks, but Board B never receives anything. Both use MCP2551 transceivers. What did you forget?',
        choices: [
            { text: '120Ω termination resistors at both ends of the bus', correct: true, xp: 25 },
            { text: 'A third data wire between boards', correct: false, xp: 0 },
            { text: 'Pull-up resistors on CAN_H and CAN_L', correct: false, xp: 0 },
            { text: 'The boards need the same firmware version', correct: false, xp: 0 }
        ],
        explanation: 'CAN bus requires 120Ω termination resistors between CAN_H and CAN_L at both ends of the bus. Without termination, reflections corrupt the signal — communication either fails or is unreliable.'
    },

    // ═══════════════════════════════════════════
    // LEVEL 3 — Advanced Scenarios (8, 1 per topic)
    // ═══════════════════════════════════════════
    {
        level: 'level3', topicIndex: 0,
        title: 'ADC Readings Show 50Hz Hum',
        description: 'Your precision 24-bit ADC (ADS1256) shows a clear 50Hz periodic noise on strain gauge measurements. The noise is 10× larger than your signal. What is the primary fix?',
        choices: [
            { text: 'Implement star grounding + Kelvin sensing on the shunt, shield analog traces with guard ring', correct: true, xp: 35 },
            { text: 'Increase the ADC sampling rate to 1MHz', correct: false, xp: 0 },
            { text: 'Use a shielded USB cable', correct: false, xp: 0 },
            { text: 'Replace with an 8-bit ADC to reduce noise sensitivity', correct: false, xp: 0 }
        ],
        explanation: '50Hz pickup comes from mains coupling into high-impedance analog nodes. Star grounding prevents digital return currents through the analog ground, Kelvin sensing rejects lead resistance, and guard rings shield sensitive traces.'
    },
    {
        level: 'level3', topicIndex: 1,
        title: 'USB High-Speed Intermittent Failures',
        description: 'Your USB High-Speed (480 Mbps) interface works sometimes but frequently disconnects. The TDR measurement shows a 75Ω impedance section in the D+/D− traces. What is wrong?',
        choices: [
            { text: 'Differential pair impedance is not matched to 90Ω — redesign trace width/spacing per fab stackup', correct: true, xp: 35 },
            { text: 'The USB cable is too long', correct: false, xp: 0 },
            { text: 'The MCU firmware has a bug', correct: false, xp: 0 },
            { text: "USB HS doesn't need impedance control", correct: false, xp: 0 }
        ],
        explanation: "USB HS requires 90Ω ±10% differential impedance. A 75Ω section causes ~8% reflection at every transition, degrading the eye diagram. Recalculate trace width/spacing using the fab's actual stackup."
    },
    {
        level: 'level3', topicIndex: 2,
        title: 'MCU Randomly Resets Under Motor Load',
        description: 'Your robot controller MCU resets when the motors start spinning but works fine with motors disconnected. Power rails measure OK with a DMM. What should you check?',
        choices: [
            { text: 'Oscilloscope on VCC rail — look for voltage dips/spikes during motor start transients', correct: true, xp: 35 },
            { text: 'Multimeter on the motor terminals', correct: false, xp: 0 },
            { text: 'Logic analyzer on the SPI bus', correct: false, xp: 0 },
            { text: "Replace the MCU — it's defective", correct: false, xp: 0 }
        ],
        explanation: 'Motors create large current transients at startup that cause voltage sags. A DMM averages these out — only an oscilloscope captures the fast dips. Add bulk caps (470µF+) and separate motor/logic power paths.'
    },
    {
        level: 'level3', topicIndex: 3,
        title: 'FPGA I/O Bank Voltage Mistake',
        description: 'You route 3.3V LVDS signals to Bank 2 of a Xilinx Artix-7 FPGA, but VCCIO for Bank 2 is powered at 1.8V. What happens?',
        choices: [
            { text: 'The signals work fine — the FPGA auto-adapts', correct: false, xp: 0 },
            { text: 'Outputs cannot reach 3.3V levels — data corruption or latch-up possible', correct: true, xp: 35 },
            { text: 'The FPGA resets itself', correct: false, xp: 0 },
            { text: 'Only the clock signals are affected', correct: false, xp: 0 }
        ],
        explanation: "Each FPGA I/O bank's VCCIO must match its assigned I/O standard. Running at wrong voltage means outputs can't swing correctly, causing data errors or even latch-up damage."
    },
    {
        level: 'level3', topicIndex: 4,
        title: 'Trace Burned on Power Board',
        description: 'A 0.2mm wide trace on your motor driver board visibly burned and delaminated. The motor draws 3A continuous. What went wrong?',
        choices: [
            { text: 'Trace far too narrow for 3A — IPC-2152 requires ~1.8mm for 3A at 10°C rise on 1oz copper', correct: true, xp: 35 },
            { text: 'The solder mask was too thick', correct: false, xp: 0 },
            { text: 'The board was the wrong thickness', correct: false, xp: 0 },
            { text: 'The current sensor measured wrong', correct: false, xp: 0 }
        ],
        explanation: '0.2mm trace at 1oz copper can carry ~0.3A at 10°C rise. 3A needs ~1.8mm width. Always use IPC-2152 trace width calculators for power traces — undersizing causes fires.'
    },
    {
        level: 'level3', topicIndex: 5,
        title: 'Board Fails EMC Radiated Emissions',
        description: 'Your board fails FCC radiated emissions at 48MHz, 96MHz, and 144MHz. Your MCU runs from a 48MHz clock. What is the most effective PCB layout fix?',
        choices: [
            { text: 'Route clock over continuous ground plane, add series termination, enable spread-spectrum', correct: true, xp: 35 },
            { text: 'Run the MCU at a lower clock frequency', correct: false, xp: 0 },
            { text: 'Add more copper to the top layer', correct: false, xp: 0 },
            { text: 'Use a thicker PCB substrate', correct: false, xp: 0 }
        ],
        explanation: 'Emissions at 48, 96, 144 MHz are fundamentals and harmonics. Route clock over solid ground (reduces loop area), add 33Ω series termination (reduces ringing), enable spread-spectrum (distributes energy).'
    },
    {
        level: 'level3', topicIndex: 6,
        title: 'ESD Damage on Field Connector',
        description: "Your robot's external sensor connector (UART, 3.3V) works in the lab but sensors get damaged in the field. Users report sparking when plugging in. What was missing?",
        choices: [
            { text: 'TVS diode ESD protection (e.g., PRTR5V0U2X) within 2mm of connector pads', correct: true, xp: 35 },
            { text: 'A larger connector', correct: false, xp: 0 },
            { text: 'A longer cable to the sensor', correct: false, xp: 0 },
            { text: 'A software debounce on the UART', correct: false, xp: 0 }
        ],
        explanation: 'All external connectors need ESD protection. TVS diodes clamp transients before they reach sensitive ICs. Place them close to the connector with a low-inductance ground path.'
    },
    {
        level: 'level3', topicIndex: 7,
        title: 'New Board: Power-On Sequence',
        description: 'You just received your new 4-layer STM32H7 board with buck converter, LDO, QSPI flash, and Ethernet PHY. What is the correct first step in bring-up?',
        choices: [
            { text: 'Visual inspection under magnifier for solder bridges, missing parts, and wrong orientation', correct: true, xp: 35 },
            { text: 'Connect USB and try to flash firmware', correct: false, xp: 0 },
            { text: 'Plug in the Ethernet cable and test connectivity', correct: false, xp: 0 },
            { text: 'Apply 24V and see what happens', correct: false, xp: 0 }
        ],
        explanation: 'Always inspect first! Then: current-limited PSU at ~50mA → measure rails → check clock with scope → connect SWD → flash blink test → test peripherals one by one.'
    },
    {
        level: 'level3', topicIndex: 8,
        title: 'Robot Board Integration Problem',
        description: 'Your complete mobile robot mainboard has MCU, BLDC motor driver, IMU, and CAN bus. MCU boots fine, sensors work, but when you enable the motor driver, the IMU readings jump wildly. What is the design issue?',
        choices: [
            { text: 'Motor switching noise is coupling into the analog sensor domain — separate power domains and add filtering between motor and sensor sections', correct: true, xp: 35 },
            { text: 'The IMU chip is defective', correct: false, xp: 0 },
            { text: 'The CAN bus is interfering', correct: false, xp: 0 },
            { text: 'The MCU clock is wrong', correct: false, xp: 0 }
        ],
        explanation: 'Motor PWM switching creates high dI/dt transients that couple through shared power/ground paths. Solution: separate motor and sensor power with LC filters, use ground plane partitioning, keep motor traces far from sensor traces.'
    },
    {
        level: 'level3', topicIndex: 9,
        title: 'ESP32 Wi-Fi Range Too Short',
        description: 'Your ESP32-based robot controller gets only 3m Wi-Fi range instead of the expected 30m. The PCB antenna area has copper fill on all layers. What is wrong?',
        choices: [
            { text: 'Ground plane under the antenna blocks radiation — remove copper on all layers in the antenna keep-out zone', correct: true, xp: 35 },
            { text: 'The ESP32 module is defective', correct: false, xp: 0 },
            { text: 'Wi-Fi only works at 3m range', correct: false, xp: 0 },
            { text: 'The antenna needs a separate power supply', correct: false, xp: 0 }
        ],
        explanation: 'Copper under or around the antenna area acts as a shield, severely attenuating radiation. Clear all copper layers in the antenna keep-out zone as specified by the module datasheet layout guide.'
    },

    // ═══════════════════════════════════════════
    // LEVEL 4 — Expert Scenarios (7, 1 per topic)
    // ═══════════════════════════════════════════
    {
        level: 'level4', topicIndex: 0,
        title: 'DDR3 Training Fails on Custom Board',
        description: 'Your FPGA board with DDR3 SDRAM fails memory initialization at write leveling. Address/command signals look clean. What is the most likely PCB-level cause?',
        choices: [
            { text: 'DQ-to-DQS skew exceeds tolerance within the byte lane — reroute with tighter length matching', correct: true, xp: 40 },
            { text: 'The DDR chip is counterfeit', correct: false, xp: 0 },
            { text: 'Wrong firmware DDR initialization', correct: false, xp: 0 },
            { text: 'Ground plane is too large', correct: false, xp: 0 }
        ],
        explanation: 'Write leveling requires tight DQ-to-DQS timing within each byte lane. Excessive length mismatch prevents the training algorithm from finding a valid timing window.'
    },
    {
        level: 'level4', topicIndex: 1,
        title: 'BLDC Motor Voltage Spikes',
        description: 'Your 3-phase BLDC inverter shows 60V spikes on the phase node during switching, even though bus voltage is only 24V. FETs are rated 40V and two have failed. What PCB error caused this?',
        choices: [
            { text: 'Switching loop inductance too high — bulk cap too far from FET drain/source creates L×dI/dt spikes', correct: true, xp: 40 },
            { text: 'PWM frequency is too low', correct: false, xp: 0 },
            { text: 'The motor is too powerful', correct: false, xp: 0 },
            { text: 'The gate driver is too fast', correct: false, xp: 0 }
        ],
        explanation: 'V_spike = L_loop × dI/dt. Move the bus cap to within 5mm of FETs and minimize the hot loop area. Add RC snubber as well.'
    },
    {
        level: 'level4', topicIndex: 2,
        title: 'Multi-Board CAN Bus Unreliable',
        description: 'Your robot has 6 boards on CAN bus. Communication works with 2 boards but becomes unreliable with all 6. Bus length is 1.5m. What are you missing?',
        choices: [
            { text: 'Proper daisy-chain topology with 120Ω termination at BOTH ends only', correct: true, xp: 40 },
            { text: 'Use thicker wires', correct: false, xp: 0 },
            { text: 'Lower baud rate to 9600', correct: false, xp: 0 },
            { text: 'Add pull-ups on CAN_H and CAN_L', correct: false, xp: 0 }
        ],
        explanation: 'CAN must be daisy-chain (not star) with 120Ω at both physical ends only. Star topology creates stubs causing reflections.'
    },
    {
        level: 'level4', topicIndex: 3,
        title: 'Robot System Architecture Decision',
        description: 'Your team is designing a 6-DOF robotic arm with vision. The debate: one large board or multiple boards?',
        choices: [
            { text: 'Split into functional modules (compute, motion, power, per-joint) connected via CAN with documented interfaces', correct: true, xp: 40 },
            { text: 'One board is always simpler and cheaper', correct: false, xp: 0 },
            { text: 'Use as many boards as possible', correct: false, xp: 0 },
            { text: 'Put everything on a single flex PCB', correct: false, xp: 0 }
        ],
        explanation: 'Modular architecture isolates failure domains, enables independent development/testing, and allows field replacement. Worth the connector cost for complex robots.'
    },
    {
        level: 'level4', topicIndex: 4,
        title: 'First-Article Assembly Defects',
        description: 'Your first assembled batch has 30% failure rate. X-ray shows voids under QFN thermal pads and tombstoned 0402 resistors. What should you fix?',
        choices: [
            { text: 'Redesign thermal pad with window pattern and verify 0402 pad symmetry; tune reflow profile with assembler', correct: true, xp: 40 },
            { text: 'Blame the manufacturer and switch vendors', correct: false, xp: 0 },
            { text: 'These are normal defect rates', correct: false, xp: 0 },
            { text: 'Only the firmware is wrong', correct: false, xp: 0 }
        ],
        explanation: 'QFN voids: use window-pane solder paste pattern. Tombstoning: ensure symmetric pad geometry and equal thermal mass. Early DFM review with your assembler prevents this.'
    },
    {
        level: 'level4', topicIndex: 5,
        title: 'Pre-Compliance EMC Failure at 150 MHz',
        description: 'Near-field probe shows strong peak at 150 MHz — 3× your 50MHz Ethernet RMII clock. Localized to the clock trace area. What layout fix has highest impact?',
        choices: [
            { text: 'Route clock over unbroken ground plane, add guard vias on both sides, 33Ω series termination', correct: true, xp: 40 },
            { text: 'Move clock trace to other side of board', correct: false, xp: 0 },
            { text: 'Increase board thickness to 2mm', correct: false, xp: 0 },
            { text: 'Add EMI shield can over entire board', correct: false, xp: 0 }
        ],
        explanation: '3rd harmonic from trapezoidal clock edges. Continuous ground minimizes loop area, guard vias prevent edge radiation, series termination slows edges to reduce harmonics.'
    },
    {
        level: 'level4', topicIndex: 6,
        title: 'Critical FPGA Goes Obsolete',
        description: 'Your product uses a Lattice ECP5 FPGA that just received NRND status. You have 500 units in production. What is the correct response?',
        choices: [
            { text: 'Last-time buy of sufficient stock AND begin designing drop-in replacement with current-production FPGA', correct: true, xp: 40 },
            { text: 'Ignore it — NRND parts are available forever', correct: false, xp: 0 },
            { text: 'Immediately stop all production', correct: false, xp: 0 },
            { text: 'Switch to a completely different architecture', correct: false, xp: 0 }
        ],
        explanation: 'NRND means eventual discontinuation (1-3 years). Last-time buy covers near-term + parallel design-in of replacement. This is why dual-sourcing matters.'
    }
]);
