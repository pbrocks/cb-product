<?php


function product_blocks_editor_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'product-blocks-js',
		$url . '/build/index.js',
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-plugins',
			'wp-edit-post',
		)
	);
	// Styles.
	wp_enqueue_style(
		'product-blocks-editor-css',
		$url . '/build/editor.css',
		array( 'wp-edit-blocks' )
	);
}

add_action( 'enqueue_block_editor_assets', 'product_blocks_editor_assets' );
/**
 * [product_blocks_assets] Hook assets into the editor.
 *
 * @return [type] [description]
 */
function product_blocks_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	wp_enqueue_style(
		'product-blocks-frontend-css',
		$url . '/build/style.css'
	);
}

add_action( 'enqueue_block_assets', 'product_blocks_assets' );
