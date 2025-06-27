import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ to = "/", children = "Button" }) => {
  return (
    <StyledWrapper>
      <StyledLink to={to} className="btn">
        {children}
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    --color: #4F7A92;
    --color2: #F7E8C0;
    padding: 1rem 2rem;
    background-color: #F7E8C0;
    border-radius: 3rem;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 400;
    font-size: clamp(1.5rem, 2.2vw, 2.5rem);
    color: var(--color);
    text-decoration: none;
    display: inline-block;
    text-align: center;
  }

  .btn::after, .btn::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
  }

  .btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }

  .btn:hover {
    color: var(--color2);
  }

  .btn:active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
`;

const StyledLink = styled(Link)``;

export default Button;
