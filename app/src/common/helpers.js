/* @flow */

/**
 * Autoload the files from the given context.
 *
 * @param  {Object}   context
 * @param  {Function} callback
 * @return {void}
 */
export function autoload(context: Object, callback: Function): void {
	context.keys().forEach(file => callback(file, context(file)));
}
