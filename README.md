# Bug report

## Describe the bug

The styled-components' theme is not passed to props in production with `next build && next start`. There is no problem in dev or in production with `next build && next export`

```typescript
// _app.tsx

 render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }

// Home.tsx
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

```


## To Reproduce

1. Clone the repository:

```bash
git clone git@github.com:tglatt/nextjs-with-sc-theme.git 

cd nextjs-with-sc-theme
```

2. Test in dev:

```bash
yarn dev
```

connect to http://localhost:3000 => the color is green, the theme is passed to props

3. Test with `next build && next export`:

```bash
docker-compose -f build-export.docker-compose.yml up
```

connect to http://localhost:3011  => the color is green, the theme is passed to props

4. Test with `next build && next start`:

```bash
docker-compose -f build.docker-compose.yml up
```

connect to http://localhost:3010 => there is no color, the theme is not passed to props

## Expected behavior

The behavior should the same in dev, with `next build && next start` or `next build && next export`

## System information
 - Version of Next.js: 8.1.0
 - Version of styled-components: 4.2.0
 - Version of react: 16.8.6
 - Version of typescript: 3.4.5




