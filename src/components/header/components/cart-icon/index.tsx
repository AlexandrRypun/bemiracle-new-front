import React, { useCallback, useEffect, useRef, useState } from 'react';
import Canvas from '../../../canvas';
import useDetectClick from '../../../../hooks/use-detect-click';
import { CartProduct } from '../../../../types/products';

import './styles.css';
import CartItem from './components/cart-item';
import { useHistory } from 'react-router-dom';

const CartIcon: React.FC<React.ComponentProps<any>> = () => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'aaa',
          price: 12.5,
          img:
            'data:image/png;base64,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',
          quantity: 2,
        },
        {
          id: 2,
          name: 'bb',
          price: 145,
          img:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADOCAMAAAA+EN8HAAABp1BMVEX////YZxr/34/3x0Xd6OjtqyYYS1Q7ip0VOD/WXQX/3Yf/35D/4o7/45H/5ZL/4pL50IjXYhn/+Oj/zUT3yEYxh50eg57XYgjm7u788+vVWQD4z4gAQFX704LjmXTuryfd7/KTrJgANkDrpSXZayDOZRvefB0ARlThhDcAQ1VAREzz08RLTE/3xDK/wJTspQCntJbgsWvzu2rVfTeunHCDpZnix4ReW1XmliLpv0b5zl10bVzXvoDz1Yv635/Cp0m3oEratkf702w3PUmEeWHo1JFxdk/CrHe7p3Vom5r50GQ6P0ofLDH/8tT75K4lUVOgkkz86sBpclBCXlKDgU5QZVE+eH/poUKikmyNgWTVy5LjiyAqNEbzvUsALEHllDulVSM0MS+GSife3dfafUewu7hzh4KeqqLFy8JWcGlLYlKPiE2klEy9pErtrEUuYGVAgIpOa2icnHfwuE/216L45tn/2GVblZt9hWm9YydpeGXmkxXtt3xzajliRTSdfTO9kC8vRD5ZWDt9TjBCSzzFnEpBNS5lPys9NC/ds5vdu6jco4TbilxRfRYEAAATCUlEQVR4nOWd/V8bx7WHrRUgo2V3A5IgODg4skEgyy9NZclBkhMLUmSDjZ2kDrrGDsa3ubd1Uiep25Tc26SpW8dN+0ffmX3TzsyZl33RG/d8ml9SIvQw57tzzplzZk+dGj+ba98f9lcYtC22LqUvbdwZ9tcYqN3NXUoju5SdG/Y3GZjdydvINvaNYX+Zwdhc20fG1On/D9JuBZFt7NsnXdp30zSzLe3FYX+vPtqdDQD5ZEt7LstBxtT5kyntG3xkG7t98rav37wvZsbY+rC/ZLL29Hlx6aP3chLq3KW7w/6iydmbnxenpqZK68/SMuyTE5n+V7E0Zdv63gcy6hMi7f/ec5GxLf3uphx77Levp78tTgWttPQrqbTHPTL9vFiaoqxUupc7ydK++8ljhtmW9vtyHx/TyBQlkLmbv1sCqKeWfn0ype0mkLkP9tYB6tLSJ3mpj49dZOrHnLn8s3XIx0tTX8gX+/Y4bV/3gwlk7r2PlkBpf3ySpM0kkLmbH8PSlkem6fGITMEEMvfBFCjt9WdyaW+M/mJzEkgkbdjHpZFpe+QrpvehapCLjaQN+vjHou3rtqaPOPTcbWHOnHsflLYgMt3I6po22tCatEyQ+2IK3L5K96CkM5/VEfNoQy8u/CGfl1HnP+FIm92+2jbyqEOfmV17JKNG0v61UmSKxKxp4wCdSs1+Jl3sPJI2JzLtSdsW87hAp2Yv/F6+2LkvSsLI1BXz2EAj7LW40m4HkccDGmMrSPsmR9of9cQ8VtCp2dlPpYudzn0JJZ17hcsz2lhCO9KW+nj6Hu3jew8yhcvGuEI7Pi7Ffu9XBPaDTGa8ofH2lVaQdq+e9PyrzPhDp2ZTKtJ260l7NvL4Qyvu2mmcdD7IZE4KNMJeVZH2d5nMSYJG29dDmbTz2auFkwWNpX1duNht3Th50Fjak1xsHIDNnERovrQ37NQChLbMcYeGpe1lUxC0WdvXxx0aS5uOTNteagFAW93Ncmv8obG0gz6+0cumWGi9Xt+qjL17e9L2fDyftXoZZBB6HkMbjarZrJvDg76v+jsVoJG0ne2rTeTMPehC5jL27WZNq3X2hwY9d/uS6kGxCrQj7dtkacSHLsy/o884T+56rds0hgO9qONStmIPiBp0KnXmXYvaiV3o+VsfugUEc2vfrHs/NWDou15ziNJB8R8Voadh6PnMf3g1E6Nbt1pVYxjQxImrvIXxrSuzMaALhauaR2l2D1pGy1fAAKGffk0eJ0paGF9cuXI+BvT8tZa3zJa1ddA0A//v4KA/L5bo40RBn9OdR1cmJ6NDG5d9z9aMVmOzE2QeGPRv7HM25jiRM1yz+C5CjgOtGX6SYdbqm/sE84Cgnz73uvxK61SjG7R93bCRQ0D/goH2zDI75R2KeSDQc98EO97o40Rm+7o/6TInAG22GuUyzTyIU/kbl3LvE1V4+jiRaNOd+4OHHB/a1KvlSnmbZtb0jUutvrad3MdjYrncveABW2n9E/LI3N++Fs/2kGNCGwi5UqnUawwzgkb+1b8eI799gqrCr09R3TBt+8dfBJGjQZuGYVmGaerb3XKlUu5adNnEgcbtg/1pkV0Mtk9QB2zE9oWyBfTj95dJ5kjQ3eo2sn0kZYRcb7LL7EH3qfv9j1TbB9nV2du+7DyYEHN0aKvWONjcsYnLjW0L1roL3ZcW2YvT1HmEU4XvYZfu5bwKj/UWgxxtpS2j1ek26o1up2Vynum65n+r5LvfL07PXqCO06nWL7R9td3UH2CO+iBDijZNA9Cyg6y3iWdowt3vF6eB43Sy9evBLU90AHMSwQmLnKWricmOXGNooFOm1/r1PFO45YbI+vnlQUDr2Y00a0lK24Fmj9Pd/hB8quhDa2dWJxnspKF1/TaAnE60+92FBo7T0fblnCr2oKdnU9dZ6lUlbEVoUswUdlLd7z409nFS2rk/3SpQ0NglGOzl6xcUsFWgATFT2Ml0vwegqU6ZfNYMQuOoydH/Kivth3JqBWhYzKS1k4YmpN22tBkX+lsEbW5XDc392dmHtLSXJ6U+LoXWRZ7tIWuJjOCS0L607bYuG7owf62FC5WVrqn5+gd8XCZtGbTMs9NuF2U/oO0zN7dHE0PPf4trOsZ+s7Xvr7SNzfj48vWUCFsMbbakyO65X1+g8WK7AdjMrfnM5Rn7kKmFUoQgNJY2u32JpC2CNvU/Sye2vNORPkGn1twIbObWO5rz4DY71U7L0sifnf2MkbbAx4EamWuWUV0voSBfNLHV66LsN7TmFWjxsdq29/QOUIfZvnjQltl08zo8sQU7ebAluu/QnvfVNmt2ns/8bAhpc6DND7/rhfnwxBbZEj0gaLN54JawgBOc2TVa2Bxpg9BYzMGOydISO7FFtUQPBtrsHFSdf2EdLgDUqc+Uti+w7t1h2t7pGhXTEj0IaMvqHvjl2aX6MbCIatJmoc3m19CAQ7BGtZGljncHAW2gR5i3zsgeLz07DykWikxpadPQZus7sN8d+7gnbRY5EejFXwAe60DjcmWzsVnu1e109GXy6YezEPYau2uTPk5C6/o34GSDL+10jhZzYtAvrvwPQICgW8ia+/WdzUYr4Ov475/PP4I2YyDpJKVNQOvtPDyX50t778sshBwfGp/NXAehjWbl4GBzc2erSRTu3C0k/3toM5ZIuwetO9lU7gtw5Naxva/eoecbEoF2yrkwNBJzbbvZ1InKna77O2f+OujjUNLpSduH1jU3geQN70zhZv9CP6AX3XIuBP1L7NGWQdYqdSLbxdJm/0NR0ulCEwkkZy7vOc5n+wD94opbzuVCU6ZrZOmKJ21u0mlD06URaC7PnW9IHPpO72wGiiNYaCjBR9IG1pobmSJoHSiN0HN5/nxDwtDk2QwQR9DQ3NLV7Qsg9hokbbzSYJ2TkHZvviFZaOZsZvkhFUdQ0LzS1aOzJsSM6xBMZIo86l1uNcg/NnwemG9IEvrFJHs2Q1e4CGhazL6hrJ4DjX38U2klhMDGc3nPv8r0B/p/oeMo+2GzAENbnPWxwyUutNpUWpA6/exBJtMn6LcX2Gq9bX/5foWF5op5Q7P3HwG02sBp4I9ozPcRGoogJn8oIjuiofliduMMIbTawKn/R9T7CW1HEKRv//XHx6eRFX9082UHWtdEnq0ArTaVlna7wPsMTSYHy+f/ZiPb2K9WFlxotDNztqlAVi+DVpO2U+fsNzQROP3lcfG0b8XiS/QnWTOhMMI237MVoeUDp57f9B/aTw5+OB1Axvb476uzKOHgHCqdpQoBCtDigdNenXMQ0Fjay3/9+2MSufj4B+Tvn0nFHAZaMEserHMOBjo1u0LF+vbFcPk0Z13aGlPZU4TmbV/ESMeAoFMrxdNBZuEVgBsaULxRhoauQqHqnAOEPn16zy/QCG6EA6qSIaHtyDRPfCL5WQOFPu16Nnh5ku+HcL0qDDTG9nu38uwfcbDQGHtddIErDzksdE/a0CcOGvp08R+ckzPID2NA29IOTh6qQRP9sslBr6zyIoi2xWeOAI127bPwJ3KhDa3TDFAnCO0NBlLGnCTFhk5NvwV/Fg/a3K7sdPsDjZfgPI0t8uxBQZvdzXIlOOuQKDQz1w48YQcPjZirtZ1Ov1baxg7MtfOf2f2B1kjoeRvaqDZapr7ZDMSCiUP7M78yMfcbupBxb62qmq1mbTP4XZKHtsvWaFPJqjWv9gnany3GB7rl5nYjWKjsBzSWdlu1Sbk/0L3ZYnxhwJbZ7fRpnya+1llF5r5AB2aLkabrFd2sx+05IaFfFyHohSFCFwpXZwLr2thsmrhVMUHo1MKhUzgZGejAbDGKPhEz2qFb5CM1NjSyl8XiyEA7fag+s94oN9jz08jQK4c9wpXvi8URgb4c9GyjVS/XgSdqdOjdIOPxj6MArV/Tg8mk2axU6q1EoN9adbCeHBFufjQC0BqRP5vVMmKGxrbCIr+YvLLqUu4e87/WkKCDn6tvlSsVkDkkNL7BYNmFXtndXeF+rWFDGyibrHDWORz0nH2DgQedernLX2t1aAtsMooHbZjNRrlSbuicsDAEs9t+4EOnXu3uHnG+VghoTpNRdGjLbGLPJsoGEaH9Gwx60CtPdndfHQM9kuGg8/lHKkNZatCWaWyjVUbG3hYQFjrQWNODTq282n2y+1PAxw8PD1dCQztNRmGwGWg8XGsYpmm1trsVjFzucuSsDk3cYBCAxo9wZK+OjlPOeh8fvd79KTy000injk1D6/VutdPp7G/Vy/Yi8ybnw0CTNxgQ0Aj7NeZ+8url0dHh4dHxwuvXUaB5jXRq0MZ2ZdPBxbbTaHKHqlWh6RsMKGgUjR2+/P7JEwd85afvU5GguT2yKtD4cY3cuozBG9WWKUbOSu/DYG8woKEdSPzPwsLxK/dxrg6tByYz85+qSXv6DeZjDJRK1Zq1liEh1rK6dKwWuMEAhHbs2I9FVaF1KxssGCtuXwC0hqcmDGm5JpuVXhJw9wrQMiaA7pkiNNOhoSZtGFrB5J596tQCNMufHDTYSKgi7YjQ2RsqA+NgyzkzThIRmtt7xGl/jwud1dWuv7DnY9lpEvmgsxwaiZnfMCSTdhTorOptCPgXAC3n8kFnKbRkoF0i7fDQKmIOQMNjFbI7DMTQCgPt+dyn/F8QFlpNzAQ0POcsvsNABC29qsG2tgZmMhGgVcVMQaMn18NwPi6ANlWQcYswMNcXBVpZzDQ0T9pcH+dCm60/C99cZ5vTSJkIdPZu2As+iN8ES5uzfXGgDeObUkn6TmX3hDcB6KwV/ioX6nfR/c4CaYPQ/kB7qSR4Xbp/x3Fs6KwW5WIq+pdBN/DA0oaggzOw63tfwtQbvdu740KH2KZE0BxpA9sXC21SM7Dg69KJQ+140KG2KTE0LO1JekCJgTbMDv2KRuLNdbZRHSpxoENuUzJoUNrMFTwUNDzQTt3QQXeoRIfOht2m5NAqkSkBbXEH2gMdtGyHSmToiGIWQ4PDkKS0A9C6dnadP9vt9kpvZNkewIjQkcUsg7YjU9H25UPjBDL3HnfI2blFNg112OlnuHGoADqGmOXQOOkU+LgL7Q2v8N5Q6Pj4A7D3ynr6b96t9nzoOGK27c1z4MBrD1sQmTrQgQQSfkMhtudfzYPfXz937uIK7OI86PAxJ8M8IYEWRaYYmpxEy6XvQS8ftW9dhKEnkP1zAfJxGDqumDHyhByaL+2FsxZTGqHfUDhlv5gxI4Q+N/E2IG0IOlrMSSMrQYPSnjy/On0WKo3kbpJ3dLizzgJo9CWe/ifj4wB0bDGfmphQhnakzdh5TjUoeDeyP+sshEZf4+cLFDYDnYxnh4B2hyEpg5ntIef1kidmNWhk/yKlTUErHFqoIqtDK708OiBtfDdycLxbDn3uKSFtAlrh0EIdOQx0mDlnLO2vyWZ0KTQl7SB0vJgT28RERGi1F+u6tpG9VghCu/u0obX40La0vcXuQSco5ijQyrP8KIGcCUIX5q/aB43mdr1uCqDR9vWv6QUCOn7MSSOHhlaTNk4gg9Be/6rRPSDbOBlo7ONOZOpAx0ogOcgRoOlhSMCz7TC7B+33r5pbjdo+0Q8EQKOvdPGX0y50fDFDzBGgJe+F91/M6EIX/P5Vo9oxqfZ7EHrCjkwRdPJijgEtkrY/6+xAF+YD/asts6GTzas8aCTtM2/MJC9m7+PBaF8BG5R2oBpkQ89/+2Ggf9Xsdg3iOabpb/Ls3NOkYk7ImPhPlZrdvohJPATtDxC5zPsVq1klLy+LCyYy7kK7AoqGvSaaxJu51hsgcpkPamaH2Kb7Cy1cayr+C4Wd507iGVc/JDuz9w867P1l/YUWLjaU2qlRe5EpMIlH+LFlbdGvNBsEtAT751TExcY38EjHao1WfWcrif77CCai9uO/0NhrQGmXNLNZKW+x6xx/H1YysY//O5q0z0jOIixjf6fMrnP8oDoZ7IuRpC0+i7DMZh14dV38oDox7ImfI2xfImjLrG2VKztVhjl2ITesiaUd2se50JZpz1lUKnRn9oDETJpM2rGh8TuuvA78cpe6zCh+Ibcf2HZqFx3a2Co3trYa9R175qBBv6FwsGJWxw4XmTIrbWzXN3EzOvpft0b1Zg9ezKQJpR0iMmXd2zBq251qdbtmUa+ui1/IjW2SyFRV2tCDzMKXQdP96EMTM2niyFQx6VTt+Ipf+0nKxNJWikwVm5+GsU1xTejjKtJWan4aXMypZnGlrdD8NMxtimfxkk4p9OiImTQRtSwylTU/jZSYCZNEpqLnuLj5adTETFrkpFMEPYpiJk2IzY9MBc1PQ4451SyStLnNT8OPOdUsirQ5zU+jEXOqWfjIFIQefTGTFjbphJqfRneb4ppQ2m/TATnb/DQuYiYtVGRKNz+Nm2f3LIS0SehRjTnVTKRsYvsimp/GUMyEiX28J+1A89Nox5xqpnbS6UOPr5hJU0k6XejxiDnVTETtSNtpfoow8TjCJj0Owc1P4xRzqpnkOOTMGydFzKSJk84Xoyjm/wOOI64EAwCV7AAAAABJRU5ErkJggg==',
          quantity: 1,
        },
      ]);
    }, 1000);
  }, [setProducts]);

  const [opened, setOpened] = useState<boolean>(false);
  const ref = useRef(null);
  const closeCartCanvas = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened]);
  useDetectClick({
    ref,
    onClickOutside: closeCartCanvas,
  });
  const history = useHistory();
  useEffect(() => {
    closeCartCanvas();
  }, [history.location.key]);
  return (
    <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
      <div className="shopcart-dropdown block-cart-link" onClick={() => setOpened(true)}>
        <span className="cart-icon-icon">
          <span className="flaticon-bag" />
          <span className="count">3</span>
        </span>
      </div>
      <Canvas opened={opened}>
        <div ref={ref} className="widget akasha widget_shopping_cart">
          <div className="widget_shopping_cart_content">
            <h3 className="minicart-title">
              Your Cart<span className="minicart-number-items">3</span>
            </h3>
            <ul className="akasha-mini-cart cart_list product_list_widget">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
            <p className="akasha-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="akasha-Price-amount amount">
                <span className="akasha-Price-currencySymbol">$</span>418.00
              </span>
            </p>
            <p className="akasha-mini-cart__buttons buttons">
              <a href="cart.html" className="button akasha-forward">
                Viewcart
              </a>
              <a href="checkout.html" className="button checkout akasha-forward">
                Checkout
              </a>
            </p>
          </div>
        </div>
      </Canvas>
    </div>
  );
};
export default CartIcon;
