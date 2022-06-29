## Welcome to Quomponents

Include popular React components in your React projects easily with Quomponents.

## Installation (for standard modern project)

```markdown
npm install quomponents --save
```

## Usage
```markdown
import { AccentLine } from 'quomponents';

function CustomeLink(props) {
    return <div className="custom-link-container">
        <a className="register-external-link qt-fg-primary-100" href={props.link}>{props.content}</a>
        <br />
        <AccentLine
            asVariant="warning"
            asSize="normal"
            asFloated="inline"
            withAnimation={{
                animation: "zoom",
                duration: 0.5,
                delay: 0,
            }}
            isHidden={false}
            isFluid={false}
            withColor={{
                accentColor: getStyleConfig().colors.primary_100
            }}
        />
    </div>
}
```
