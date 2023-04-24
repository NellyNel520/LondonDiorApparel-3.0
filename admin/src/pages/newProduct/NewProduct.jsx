import './newProduct.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 150, 255, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png') center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	min-width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 20px;
	${mobile({ width: '75%' })}
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #0ca2e2;
	color: white;
	cursor: pointer;
`

const Links = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	text-align: center;
`

export default function NewProduct() {
	return (
	<div className="newProduct ">
    <Topbar />
    <div className='flex'>
    <Sidebar />
		<Container className="font-play">
			<Wrapper>
					<h1 className="addProductTitle text-3xl text-center mb-6 font-play">
						New Product
					</h1>

					<form className="addProductForm pl-[20%] text-center flex-wrap">
						<div className="addProductItem">
							<label>Image</label>
							<input type="file" id="file" />
						</div>
						<div className="addProductItem">
							<label>Name</label>
							<input type="text" placeholder="Apple Airpods" />
						</div>
						<div className="addProductItem">
							<label>Stock</label>
							<input type="text" placeholder="123" />
						</div>
						<div className="addProductItem">
							<label>Active</label>
							<select name="active" id="active">
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>
					</form>
					<button className="addProductButton  ml-[42%]">Create</button>
			</Wrapper>
		</Container>
    </div>
	</div>
	)
}
