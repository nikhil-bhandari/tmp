import React, {Component} from 'react';
import UserLoan from "./UserLoan";
import styled from 'styled-components';
import {FormattedMessage} from "react-intl";
import {PageHeader} from "./CoreComponents";

const ProductCard = styled.div`
  background-color: #AD0027;
  padding: 30px 30px 90px 30px;
  color:#FFF;
  width: 25%;
  margin-right: 20px;
  position: relative;
  
  h2 {
    margin-top: 0
  }
  
  a {
    color: #AD0027;
    background-color: #FFF;
    padding: 10px 20px;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 30px;
 }
 
`;

export default class ApplyLoanComponent extends Component {
  constructor(props) {
    super(props);
    this.openProduct = this.openProduct.bind(this);
    this.closeProduct = this.closeProduct.bind(this);
  }

  state = {
    selectedProduct: null
  };

  openProduct(product) {
    console.log('REGISTERING', product);
    return () => {
      console.log('REGISTERING', product);
      this.setState({
        selectedProduct: product
      });
    }
  }

  closeProduct() {
    this.setState({
      selectedProduct: null
    })
  }

  render() {

    let productModal;

    if (this.state.selectedProduct === 'LOAN') {
      productModal = <UserLoan
        onCancel={this.closeProduct}/>
    } else if (this.state.selectedProduct) {
      alert('Not supported');
    }

    return <div>
      <PageHeader>Products</PageHeader>


      <div style={{display: 'flex',}}>
        <ProductCard>
          <h2>Fixed Deposit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut hendrerit lacus. Vestibulum mollis ligula ac
            sodales laoreet.</p>
          <a onClick={this.openProduct('FD')}>
            <FormattedMessage id="apply"/>
          </a>

        </ProductCard>
        <ProductCard>
          <h2>Recurring Deposit</h2>
          <p>
            Nunc porta tortor eget nisi fringilla tincidunt. Donec id dui suscipit, ultricies erat a, condimentum magna.
            In facilisis at nisi non dignissim.
          </p>
          <a onClick={this.openProduct('RD')}>
            <FormattedMessage id="apply"/>
          </a>

        </ProductCard>
        <ProductCard>
          <h2>Loan</h2>
          <p>
            Quisque quis lorem id ipsum vehicula mattis non sed mauris. Vestibulum id vulputate diam. Vestibulum in arcu
            sit amet dui euismod dapibus a vel nisl.
          </p>
          <a onClick={this.openProduct('LOAN')}>
            <FormattedMessage id="apply"/>
          </a>

        </ProductCard>
        <ProductCard>
          <h2>PPF</h2>
          <p>
            Aenean scelerisque et nibh a egestas. Donec iaculis blandit rutrum. Aenean fermentum sit amet dolor ut
            convallis.
          </p>
          <a onClick={this.openProduct('PPF')}>
            <FormattedMessage id="apply"/>
          </a>
        </ProductCard>

      </div>
      {
        productModal
      }
    </div>
  }
}
