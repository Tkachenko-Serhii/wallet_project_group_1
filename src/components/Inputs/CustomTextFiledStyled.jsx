import { TextField, styled } from '@mui/material';

const CustomTextFiledStyled = styled(TextField)({
	'& > div': {
		paddingLeft: '13px',
		paddingBottom: '10px'
	},
	'& input': {
		padding: 0,
		fontSize: '18px',
		lineHeight: '27px'
	},
	'& input::placeholder': {
		color: '#bdbdbd'
	},
	'&  svg': {
		fill: '#e0e0e0'
	},
	'&  svg:last-child': {
		marginRight: '22px'
	},
	'&:hover svg, &:focus-within svg': {
		fill: '#000',
		transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
	}
});

export default CustomTextFiledStyled;
