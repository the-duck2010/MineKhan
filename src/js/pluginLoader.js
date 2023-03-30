import { texturesFunc, blockData, BLOCK_COUNT, blockIds, Block } from "./blockData.js"

const loadPlugin = function (plugin) {
	let i = 0;
	// const keys = Object.keys(plugin);
	// for (i; i < keys.length; i++) {
	//   blockData.set(plugin[keys[i]]);
	// }
	for (plugin.length; i < plugin.length; i++) {
		try {
			blockData[i] = plugin[i]
		} catch {}
	}
  };
  

export { loadPlugin }