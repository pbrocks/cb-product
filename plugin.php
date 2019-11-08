<?php
/**
 * Plugin Name: cb-product-block — wp-scripts
 * Plugin URI: https://jeffreycarandang.com/create-gutenberg-block-plugin-wp-scripts-postcss-build/
 * Description: cb-product-block — Block plugin using wp-scripts.
 * Author: jeffreycarandang, pbrocks
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';
