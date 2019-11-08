
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import {
	Button
} from '@wordpress/components';

import {
	MediaUpload,
} from '@wordpress/block-editor';


/**
 * Block dependencies
 */
import icons from './icons';

registerBlockType('product-blocks/swiper', {
	title: __('Media Upload Button', 'product-blocks' ),
	icon: {
		background: 'purple',
		foreground: '#ffffff',
		src: icons.upload,
	},
	category: 'common',
        keywords: [
            __( 'Image', 'product-blocks' ),
            __( 'MediaUpload', 'product-blocks' ),
            __( 'Message', 'product-blocks' ),
        ],
        attributes: {
            imgURL: {
                type: 'string',
                source: 'attribute',
                attribute: 'src',
                selector: 'img',
            },
            imgID: {
                type: 'number',
            },
            imgAlt: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img',
            }
        },
        edit: props => {
            const { attributes: { imgID, imgURL, imgAlt },
                className, setAttributes, isSelected } = props;
            const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id,
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                });
            }
            return (
                <div className={ className }>

                    { ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    { icons.upload }
                                    { __( ' Upload Image', 'product-blocks' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <p class="image-wrapper">
                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

                                <Button
                                    className="remove-image"
                                    onClick={ onRemoveImage }
                                >
                                    { icons.remove }
                                </Button>

                            ) : null }

                        </p>
                    )}

                </div>
            );
        },
        save: props => {
            const { imgURL, imgAlt } = props.attributes;
            return (
                <p>
                    <img
                        src={ imgURL }
                        alt={ imgAlt }
                    />
                </p>
            );
        },
    },
);
