// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkout } from 'checkout-sdk-node';

import { Box, Stack, Modal, Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ButtonWithModal = ({ open, setOpen }) => {
  //  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWeChatPay = async () => {
    /*  const cko = new Checkout('18460DAE21F7C34F4A0828457C7FFDB0', {
      client: 'ack_i2yvtzufrfuehlvwc2a4cwvm2e',
      scope: ['gateway'], // array of scopes
      environment: 'sandbox', // or "production"
    }); */

    // Or if you use api keys:
    const cko = new Checkout('18460DAE21F7C34F4A0828457C7FFDB0', {
      pk: '638D5E23A3320FFC3516307BAF54BDC9',
    });

    try {
      const payment = await cko.payments.request({
        source: {
          // inferred type: "token"
          type: 'webchatpay',
          billing_address: {
            address_line1: 'Wall Street',
            address_line2: 'Dollar Avenue',
            city: 'London',
            state: 'London',
            zip: 'W1W W1W',
            country: 'GB',
          },
          phone: {
            country_code: '44',
            number: '7123456789',
          },
        },
        currency: 'USD',
        amount: 1000,
        payment_type: 'Regular',
        reference: 'ORDER 1234',
        description: 'Mint Tea',
        customer: {
          email: 'new_user@email.com',
          name: 'John Smith',
        },
        metadata: {
          value: 'My value',
        },
      });
    } catch (err) {
      console.log(err.name);
    }
  };

  const sign =
    'algorithm=RSA256,keyVersion=1,signature=CeqhfQHN9x5gi3RM5JwIuFBHsjkbguKBzfduMD1X4vounrUzFWxuug5eraA6kKFE9/YjkMSn6TqDsA7a4mfw1k0iSav8C9AjE4JkydzpegLNOfc4Ht54YRD1ToFsn0k15GY+P0aLmLAAKFZHJluG3K9+LaoGVUo0dsg4ZV9jYI6CqG8N+ttOi3rb2QkCQKVk+2yEHnnAwwXNQkxW5RbGJC36UpNsM9fvwtwdcULschg4UP3RFxVSeygso3LNUfkpZiwrhRoITXxPf6wsQnNc9usd6Oh665Q+gzn0SXN1rO8j1gorWCqnnBdcx7sRVey6JzqlhewFzGTM42ZGtqwtRQ==';

  const handleAliPay = () => {
    axios
      .post(
        'https://open-na-global.alipay.com/ams/api/v1/payments/pay',
        {
          productCode: 'IN_STORE_PAYMENT',
          paymentNotifyUrl: 'https://alipay.com/notify_test',
          paymentRequestId: '20230816073257118',
          paymentMethod: {
            paymentMethodId: '2888888888888888888',
            paymentMethodType: 'CONNECT_WALLET',
          },
          paymentFactor: {
            inStorePaymentScenario: 'PaymentCode',
          },
          paymentAmount: {
            currency: 'EUR',
            value: '100',
          },
          order: {
            referenceOrderId: '0000000001',
            orderDescription: 'NewWhiteLaceSleeveless',
            orderAmount: {
              currency: 'EUR',
              value: '100',
            },
            merchant: {
              referenceMerchantId: 'seller231117459',
              merchantName: 'Some_Mer',
              merchantMCC: '5411',
              store: {
                referenceStoreId: 'store231117459',
                storeName: 'Some_store',
                storeMCC: '5411',
              },
            },
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',

            'client-id': 'SANDBOX_5Y924Q2Z7YD405465',
            'request-time': '2023-08-16T08:30:17+01:00 ',

            signature: sign,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* <h2 id="modal-title">Modal Title</h2>
          <p id="modal-description">This is the content of the modal.</p> */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" onClick={handleAliPay} color="primary">
              Ali Pay
            </Button>
            <Button variant="contained" onClick={handleWeChatPay} color="secondary">
              Wechat Pay
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonWithModal;
