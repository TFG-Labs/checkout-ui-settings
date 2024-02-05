// @ts-nocheck
import { COLLECT_FEE, FREE_SHIPPING_THRESHOLD } from '../../utils/const';

const PuntCollect = () => {
  let forLess = '';

  const totalizers = window?.vtexjs?.checkout?.orderForm?.totalizers;
  const orderTotal = window?.vtexjs?.checkout.orderForm?.value;
  const discounts = totalizers?.find((x) => x.id === 'Discounts')?.value || 0;

  const productsTotal = orderTotal - discounts;

  if (productsTotal < FREE_SHIPPING_THRESHOLD) {
    forLess = ' for less';

    if (COLLECT_FEE > 0) {
      forLess = ` for R${(COLLECT_FEE / 100).toFixed(0)}`;
    }
  }

  return `<div id="punt-collect">
  <span class="punt-non-furniture">
    Or choose to <span class="blue-link">Collect</span> from 800+ Bash collect points${forLess}.
  </span>
  <span class="punt-furniture-collect">
    Or choose to <span class="blue-link">Collect</span> from a warehouse for <strong>free</strong>.  
  </span>
  </div>`;
};

export default PuntCollect;
