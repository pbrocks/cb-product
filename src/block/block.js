/**
 * BLOCK: cb-product-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
// import classnames from "classnames";

//  Import CSS.
import './editor.scss';
import './style.scss';
import mediaIcons from "./media-upload-icon.js";
// import urlIcon from "./url-input-icon.js";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

const { Fragment } = wp.element;
const {
	MediaUpload,
	RichText,
	BlockControls,
	BlockAlignmentToolbar,
	URLInput,
} = wp.editor;
const {
	Button,
} = wp.components;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-cb-product-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'cb-product-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'cb-product-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
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
		},
		csfNum: {
			type: 'array',
			source: 'children',
			selector: '.csfNum-body',
		},
		csfYears: {
			type: 'array',
			source: 'children',
			selector: '.csfYears-body',
		},
		csfEngine: {
			type: 'array',
			source: 'children',
			selector: '.csfEngine-body',
		},
		catalogURL: {
			type: 'string',
			source: 'children',
			attribute: 'href',
			selector: 'a',
		},
		catalogURLText: {
			type: string,
		},

		buyLink: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a',
		},
		textAlignment: {
			type: 'string',
		},
		blockAlignment: {
			type: 'string',
			default: 'wide',
		},
	},

	getEditWrapperProps( { blockAlignment } ) {
		if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
			return { 'data-align': blockAlignment };
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const {
			attributes: {imgID, imgURL, imgAlt, csfNum, csfYears, csfEngine, catalogURL, blockAlignment, url},
			className, setAttributes, isSelected
		} = props;
		const onSelectImage = img => {
			setAttributes({
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			});
		};
		const onRemoveImage = () => {
			setAttributes({
				imgID: null,
				imgURL: null,
				imgAlt: null,
			});
		};
		const onChangeCsfNum = csfNum => {
			setAttributes({
				csfNum
			})
		};
		const onChangeCsfYears = csfYears => {
			setAttributes({
				csfYears
			})
		};
		const onChangeCsfEngine = csfEngine => {
			setAttributes({
				csfEngine
			})
		};
		const onChangeBlockAlignment = blockAlignment => {
			setAttributes({
				blockAlignment
			})
		};
		const onChangeCatalogURL = catalogURL => {
			setAttributes({
				catalogURL
			})
		};

		const onChangeViewURL = (url, post) => {
			setAttributes({
				catalogURL, catalogURLText: (post && post.title) || 'Click here'
			})
		}


		// Creates a <p class='wp-block-cgb-block-cb-product-block'></p>.
		return (
			<div className={ props.className }>
				<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ blockAlignment }
						onChange={ onChangeBlockAlignment }
					/>
				</BlockControls></Fragment>
				{ ! imgID ? (

					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ imgID }
						render={ ( { open } ) => (
							<a
								className={ "button button-large" }
								onClick={ open }
							>
								{ mediaIcons.upload }
								{ __( ' Upload Image' ) }
							</a>
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
								{ mediaIcons.remove }
							</Button>

						) : null }

					</p>
				)}
				<p class="part-header"><strong>CSF #</strong></p>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( '####') }
					onChange={ onChangeCsfNum }
					value={ csfNum }
					keepPlaceholderOnFocus={true}
				/>
				<hr />
				<p class="part-header"><strong>Years</strong></p>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( '####') }
					onChange={ onChangeCsfYears }
					value={ csfYears }
					keepPlaceholderOnFocus={true}
					/>
				<hr />
				<p className="part-header"><strong>Engine</strong></p>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('X.XL Make Model')}
					onChange={ onChangeCsfEngine }
					value={ csfEngine }
					keepPlaceholderOnFocus={true}
				/>

				<p className="part-header"><strong>View URL</strong></p>
				<form
					className="blocks-format-toolbar__link-modal-line blocks-format-toolbar__link-modal-line"
					onSubmit={ event => event.preventDefault() }
				>
					<URLInput
						className="view-link"
						value={ catalogURL }
						onChange={ onChangeViewURL }
					/>
				</form>

			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { imgURL, imgAlt, csfNum, csfYears, csfEngine, viewLink, buyLink } = props.attributes;
		return (
			<div className={ props.className }>
				<p>
					<img
						src={ imgURL }
						alt={ imgAlt }
					/>
				</p>

				<p>CSF #</p>
					<div class="csfNum-body">
						{ csfNum }
					</div>
				<hr />
				<p>Years</p>
				<div class="csfYears-body">
					{ csfYears }
				</div>
				<hr />
				<p>Engine</p>
				<div className="csfEngine-body">
					{ csfEngine }
				</div>
				<p>
					CGB BLOCK: <code>cb-product-block</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );
