import React from "react";
import Diptych from "../../components/Templates/Diptych/Diptych.react";

export default {
    title: "Design System/Templates/Diptych/Diptych",
    component: Diptych,
    argTypes: {
        data: {},
        slideId: 0,
        isPresenter: false,
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    textBlockBackgroundColor: "",
                    backgroundColor: "",
                },
            },
        },
        withAnimation: {
            table: {
                category: "with-Params",
                defaultValue: {
                    animation: "",
                    duration: 0,
                    delay: 0,
                },
            },
        },
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        isDisabled: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            },
        },
        onClick: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        },
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a Diptych Slide having 2 clickable images and TextBoxes, we can switch the slideHeader into header image by giving headerImage prop and we can switch the slide into presenter view by switching the isPresenter prop to true, ",
        a11y: { disable: true },
        docs: {
            iframeHeight: 700,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Diptych {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        headerImage: "",
        diptych: [
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
            "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",
        ],
        backgroundImage: "",
        presenterTitle: "Neque porro quisquam est qui dolorem",
        presenterSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        presenterCaption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        presenterBackgroundImage: "",
        presenterImage: "data:image/png;base64,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",
    },
    slideId: 0,
    isPresenter: false,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#AD292980",
        textBlockTextColor: "#ffffff",
        backgroundColor: "#ecf0efe8"
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,

};
Default.parameters = {
    docs: {
        description: {
            story: "Diptych component have clickable images in between SliderHeader and TextBlock.",
        },
        source: {
            code: `<Diptych {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DiptychWithHeaderImage
// -------------------------------------------------------------
export const DiptychWithHeaderImage = Template.bind({});
DiptychWithHeaderImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        diptych: [
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
            "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",
        ],
        backgroundImage: "",
        presenterTitle: "Neque porro quisquam est qui dolorem",
        presenterSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        presenterCaption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        presenterBackgroundImage: "",
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#AD292980",
        textBlockTextColor: "#ffffff",
        backgroundColor: "#ecf0efe8"
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isDisabled: false,

};
DiptychWithHeaderImage.parameters = {
    docs: {
        description: {
            story: "Diptych component have clickable images in between SliderHeader and TextBlock.",
        },
        source: {
            code: `<Diptych {...${JSON.stringify(DiptychWithHeaderImage.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DiptychWithPresenter
// -------------------------------------------------------------
export const DiptychWithPresenter = Template.bind({});
DiptychWithPresenter.args = {
    data: {
        title: "",
        subtitle: "",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        headerImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        diptych: [
            "https://i.pinimg.com/564x/b1/cf/f8/b1cff858c4af57889d959e03668aada3.jpg",
            "https://i.pinimg.com/564x/02/74/fd/0274fdd7ab782768e111db0fd7387fcb.jpg",
        ],
        presenterTitle: "Neque porro quisquam est qui dolorem",
        presenterSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        presenterCaption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        presenterBackgroundImage: "",
        presenterImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAB/CAYAAACewo4KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACQYSURBVHgB3V0JmBxlmX7r6u7qe6bnnsxMQm6SkAQIIVxJFEQUV4QNInig64IiKOC16+M+G3fXxxuRS5d1RXFFIIqCaJRDgoCQhAQMCSTkYJJMMlfP1fdRVf9+X/Xc6ZnpmemEju/z9EzX2VVvff/3f9f/l4K/U3z8zKpTzp/v//qaOb4DLxyIhXECIeHvC9KNa2rnZ01cr8n4kNshV0sy7kvI+qfv3LgvjRMEFX8HuGXVDN3tlRbFssZXMqZ4n0ORVJ1YlUlkhMDHPUZyC+32I5wgKDjJce2amS6fbtwZzVi3U7tbIkmSTBJqE8rIGgK07uzz5gR2vrA/sg8nACdt8//SP1T45KR2YcrCZ5MZsdrrkKVERsDrkqBIudsyLAHDBFyavZyQIP1nFtmffPeJ9g4cR5x0pLJk1jiMKyRY18ez4tyMAdnvkhEhdj1EnqbmbknQJ8brnENS279+vyTwXZGw/vCtF1oP4TjgZCJV+vKF9e+RZPE1C1jWE7cUt0MC685Y2gILp4ea/QBiGQskvHCo+W9RCBHOCOlXaSPzxXs2dcZQRJwUpK5Zs0Zd6djz76Quv2SYwhElCfSSdGpEmkU9UU/CRMgz1OdmTYFUVsDnkkech6U3Y7BKEFAVkmr60Cl2W8L6yLefbH0ZRYKM0oe00rH3X+j2v0L8OaIklX49RyijNylQ5h7Z3zLpbudIeTFJv/YlLZZQ2ibDqUoDamGBLMlPfOmdNWtRJJS8pN66tn6pQxN/oUv1p0nKTGr73OwZLJFJkkj/MImMZ4StCtza0K0lSBWkad+ASxmhX1nKDYv/MxH8R95hmuIb0b7I0/e9EuvEFFHydmrKNC9yaIqfv7O0cbMdQNZiPTpSLpjooD5Est3k7XXKCAlK08NIEaMKscwfi1da1mm0zy89fl/3py7wbYMp9qQMc2N3r3jusT3hKApEyZNKkrja78p9ZwkcToxFJCvaSA2mjFZoxCqbWKObZIZEPqAPVxsj9iinz0W5j3JjTQCZU5vqXoolxS+bE7j/8W2tCYyDkic1I4ROUtXp1KRK7lhMa/z9ZWkkfbzI0iorJKmSQqarmUllTDg12YlRzg/r2xipDz7A5GOFrRegkq+btsSp8bR5Z1CRfbTpO+NdQ8l7VIvrvA2kSy8iTlIORRakG1WHMqRTh5tM5DlBIVFNGYDT6SQpp30kDQlq6hFaiKRMKZoyFfqv0KKStqQM6dtech7izDN1ZEk6RS+pgyhphIQlJItURzqSFko6a/mIY+ar7oqj8R9tyj2rvCh5SbVgbjCEcmtX3AooEN2KItyKqsmaIuuSYsKg+2QpzJLrlCEdaZFBE09mEI7FB88h+v9IkuAnQKdhHUo6NWOytDpZIE3qzFRZUrMZ4RnNl925DbQAIQ6tB8ZtLyeFnXr1ypq1krAepcvlpmf31vLgPcK+i4EbcTo0VFeWo6GmEkG/Fz6vBy5ap2kqZJnVh4XNO/ahpb0LpmkinUohk07TOa0JyaCfehUZ68oHXu3cO95+J41H9fHzZ64OeZxPtfX0qaz7uKkHfV7MqK1EU301qkJlaKT/AZ+byBvf/I7Ek3j4yS3ojQxJMxObSiboE6fvGVu/DoC+tZPJtb7PVCbspBgnBanrVkE//9Tzl6yY2/TCawcOq6rLKZYvWSCVB/3wuF2YCt46Esajz26DwRGXYWAyM+kUusNhGNkMr3mC7NdbfrG57fVCz13ypH54RdU5QpKeoa8OXnZqGq68YDnOOGcF3WtOIrOGgUg0jnBPBN19UURIn2azWWSo95l3ygycOqcpr/Ruf6MZf96anythCSPS0/OxcNnuhzZsgIlJoOQ7KjljHjRdqjXQd+hOB0KkK5PRGNwB2ycgQhO482e/QU/fsfb5X7b8Ddd84CKsWDL/mG3L5jdh76F2HCb9OhqSLL1SbdQ8/MMNuydFqH3NKHF0xsvCFKrbObBcGfTB6/Ui1ts3uI9Hd8KrO/Mez825+XBb3m3coZf53Xm3UU+4Yf2mTQamgJIndeO+fWkhrD8OLDdUhaCqKuI9Q6Ryj+/3ecY8R1d3X971rx84gtf2teTZQqaAYf0GU8RJkaNyOsS3L1214ryAV19TVRaw1xnpoTwe69Z6IvvQkXYSMIpgqQqZUArpXwccZEpVl/nynpdJHd7LD0Ha942H/7r/m1PscU4KUn/yQjj6lWtmKGKYC2pZI1XdO1Ytx3mnLyJCVagaB08k2+xiwiU5Pzs+tz7WT26WpLE9polQcqRes6Lqa8SHixjp9ZZVKbOWrFoIM2u8euDIsqWzZwzuRwHrEcfpHjecuo6de5tJD5N35A5ATvZi7oxy1FSW5/0tnyc/qdT4X8Q0UHqSKmMxuZGXz1y8svXyW771WlXT/CTScV/4tef0rU/+AqfVEnnqsZedSKbx0v5uzDn7cixsmmOvs8hjemPbX/HIg/fbob9TGmvIUaixSWYpJnWS7wpMQT0/poGS66hISh5x+4Kpj/3Hfdtrm+ZTYEMkpHTCUVlepp72rqvQHs3pUlkdigWlyAN68fXDOPuy61DfOBMaRQRcsgmPnMYZK87EBz75ebyy+wAe/N0z2L5rr00oQ3dqea5A6kwnjbcwDZQcqZZhPXPB5Z98OhAMhgWEQVKrp2O9tbFUFsHqGejTKuyIPQdRBtDS0YN5Ky9EyC3bZDI4F5WU3EhBR2XjPFx4+Ucwu6kOF5135uBx+Zu/OPCDxza3YxooOVI9wcCsGYvPcmQsKUgevmomovJv/+frVT/8r88i0X4ANbX1CPdGbf05gO6MAzWzlyBiqBT3lKmHEeg40oztf/4tNDMGv0PggtVrccG5Z9vWwAB0l+OY36eW8SymiZLTqU5XgFx6fzLkFEm6OMVSVQdFPfVYNIKkIAPfX0v5/AxCocDgMYo7iAAl+mSFzSsNbUcO42e3/Tta6T+Hsc5/1/ugB6vQE0lgf/MRO1LFYDXAgRS2Drjj4ygWZRO2PLxunXLKojLnmevvnTB4kg8lJ6lev95pJuOuOPkyXRT27+jqq+rq7lYrqekHK+sQ7Wm3iXizpR1tnd22nclhPWKGgtYUyqPElT9UTfvW2P6+p3IG4qZKwWoHmg8dxa7X9yLcHkaS460UH2AiBZFs0vdUIoGGgOMLS1aX/z5Qo/x1348+/cNXvn9zEJNEyUlqb1frG69u/YtRveQcnWKoCpKRxjWXfgiwG7VAy5uvoSyTwczGWpLEduwhEyrrr0fUUOzYKqkMijxRmjoSITPLi8raBvu8kZ4u8v/nkGVQnbNbpZwd692+j4LVWegOFcto24La0NmpeEzp6ovAFwws8Xuwhw6/fTL3UHKk3vvUgT534Hd/OOf9H3+3V0MjuU7l809bYW9r2f8GZrmzCJVVoXZGHRpnKkgnU9j4/N/Q2dGGUFWdvR9lBlBV34jKukaUVVTZ61qb96Cuwj/CamCwNHNe68LFM0WlV5faW1qUaG8vR6nopzOya5b+XkyS1JL0/RPNzff96ts3Nvfsf20+iZ99jW/t2YHwto2oC7jtGx4gx6m7sHrZXOx86pHB41kCr/jnz2Pd9V+0dWUi2od483YKnoyMD7DqMEhlzKwMoFx3SEcONCPS3WOfn2EYWQhTBDBJlKSb+pnPXSi5Yp7lLZt+4nzL0qgD0hCU0lhY5UeEpMjVH/IbQFlFGeZEDmP7k7/GwnMvhu72UoeXiz51kITue/4xrFhQO2ifMpjQ51550w5Sn1pfQZJ8CMl4fMR5FYrdUiLxCCaJkiNVrF8v7423fZ0IOLexssxex+mNeNRER2eYOqFyVDbUjTyIyGo6pQGetla8+LNvwt2wCLKTbNSOA/AjjlWLZsHhGGk+7Wluxcu7DiDgdiLk02FotYiTHu0Jd9meGEN3e8hMlv+KSaLkSN1X0XYtWffXx+Jx0dneJSUTSZRVh9Awby78FSGILHtUx8Y6WAora6txUVUFDDK5LLMLakU1VMexXtOhIx34xW+fIh1chSUNVeDwi0X2mErEu325WC0HYjw+z0FFMR/CJFFSpO6594YVkinuymYM12vb3xAS+firLjoXZXTzksvL7lY/qWODPS2HZ8zok22G3f/In5CIx/CPC85AfbkP1DmRqdY7IgzoLwumVbfnK7Ov/+Gka1hLppjiC++aP2vRzPqHKBZapxAx3oBP2r/3EA4faCGDnLL7IgvJytpmk0V2JX8MzkORVHKqWdXGlw87A9DShp//5kl0dPXYrm5jdTnqQkFbT2f747Ms8R6fL109c8Y9D3bU3rZp06ZJhwBLJvF3zcrqny9qqv/wqkVzbBOHo/kincW2bbsRpsg9r3OQW+l0ueyrZpIclK9qIH9++VmL4fa6xzw3P4BtO/fi13/8CxKJ1GBdxBJKCl6x+iy7t2fDn5OF5Ei0arrjXxeEG34urV9vTeVeSoLUj68ob9Ccjj1k/pANnqvOY0/HQb2vn0iMd8VgJQ27II0haRR4dqmoaayGP+CFh2KpbjKtGmbUIBQMkE/vHOzpO7t68ezmv2Hrjt1IUodn2QVrud+tLg/g0+9/Z/9ViO1CSC+IVOr2v70YO3jlhg2TTvgNoCR0akaSlwpD6C5N2OnmAbCnE4nn3G+Hk4ik28zKApZicrAUfc3HqjuuSDl17izMo7T04dYuPP/yDsqy5qrPmUuWcNFfBdgdidvqROJKtGx07bzP/iKCIqA0Oiohr4jZxbrCrnDOh4xsFeSqRMmn3/zKTvrsQixt5gp6h53SJtayQwX2A8yQge9Utb65RSKUURKkEp3zmNB4xgK1cnBVnyrnysc5oMTFvln2fgyu41fsWv2xwPsnDAt9SdMmkAdaDC8U5gJfHgok92s+w7Q4sfgmiogSkVTLwzpQswvIcoMgODzHGtTWgSRVvI3JSRrCLkEnr9IefcLc8D48CC1BEao4j1SRuTxdtslnAvtr2AZhDe/P7SiMdBBFREmQagk5qcj9/rbFKkAelEauQR0umaL/Lw9E68kKe38btIuLjmNJHlFNLfo/w8dS9ZcKci2r7nTyBRRcJ1UISoJUQ1idjgGFOaplj27oufAebPWgDhuBwhLOFsPo/aXc+FRIeTSGh0yyXGDaOoAioiSiVJKQdqH/5uURQQ8cwyob7Uo+hiTkLYzg81kiv/0+s7ZqYKfdKCJKI/QnibfsXtkOMQ9B5PHx7TX5OUU+7vLyb5tUEpbOtgPYCadsHUYRURKkpnXxAhF4zFDGPIJqM5ev72eSrDEcytGruX+roRxXY3UFL3Yls6kMioiSIPWxF+wxSk9JecRKTLA8gNyh+bdKeZbPmDfLrrki9MU1VxJFROlE/iXpp0RMasQq/jOKJ5ZIMeUqpxzmU35r2bwm+zt5V72Pt9alUESUDKnzNrf/jgj82XDCpNGj0TAwgGJMec2/dtjq2vIgLjvvdLIecrcez8q966cYOBkLJUPqeurYNWGtJ9LaBijLzx85CJOQ1OEWQQ0FUK5YswJePTdOIG3K+OmhptCaNeuLalqWVOLvp1s724RsrSbffNDDkfJJ6hik5quY5F0VcrFOnTkDH333+agI5GpVuZLl16116Mg4gvPm1TpQRJRcNvWhLeE3DTm1ltiwK5mlUYWitkYY66rzkFpJSUKWzstXnwm3c4i7F7tD2B3zcQ7Kn9K6xk4VTAElmU3dsKXvLeqUL//IiprVlAT4N0lS3mmYQyFB5m74ALUBDHCdq57246yFs0lC68ltHTaqWkjY2hvEM+FQ7lxC+JJC1VBElHQl9c+3tj37o69+8egSX/i1jq6ws6Wjm2KgMfTEEoin0nZ6mf13HkQRoEB1md+LBsrA8riAIGUCRptoFhG6M+rD79trhku/15TcThQRJZNOyYerbv1eA0z1e5dWt79/ZVmP3XYNrnuinFQma2Jg5B+H8+yydCI4n63LYAndEfFjY0c1EuZQao6yCVlLWPfBcnx+wz2fKcpcKiU7inrdLbfpsqk9QM/9fQlTlZYF+uziPPblVYUHSah2Hov/M6HcxMcilNGcdOPRtloidFjjpIeSSMQUl8t1hqRAr1mz+qUDLzw17ZnWSrLsZ926dYpsqnfQ14vYTT+SdMkRY+pqbxc1+YeP1tvVf8MRjUUpkZjro6g7vKUy5X6aHyamiZIkVau/4CsklZ8cnFCC/h9K6FNSVc93hfBbMp3ixkhC0+mUXUKpjhw/cIZqaX/88C23zcE0UHKkXvWZ21dSq7xh+DoHZfxcYnL1t6xDmdA/d1XaNumojUjE4/D589WeiQtMU/3duhumTmxJkXrJTXc4JVX+X7qxmoF1smRhbeAQyqXIYAX0REiRp/Sro3V4orOKOrZRAs7zWPV0w6XrY+tgCQsUTdu07sbblmAKKClSAzKup3+Lhq873d2B2a5u+3sh3mln2omfHm7Ca1F/3u0pnjCBHo6uu8c9D+nYekVRH1t38/ffi0ni7TepqJ1eddNdtZDFV8kS/2dSn4NKbo6rB+8INEOTePIuFT59bG8ySxK5rbcMT4fzNPd+mORAhDs7UFFZDUUp2PCJk+H2Tw/+4KaCC9XeVlLX3XC3V3WYnyR789+IzBHD8pySgXUVuxFQchZOmcdJnlJ+Ig4ndWwiD2lf3De2NFOz7+oK22VDXq8PkwIleIUsvvDg7Z+7u5Dd3xZSz7juOm2uvuQS+vF/ocWz6KqV0dm5cjWJqypez5UA0fqQz2Un6YYjRj36K30B8uPLETPHdw65yi+VSqGsPDSuPTsW6PLSMsQ3j+7o+a9Nm9aPO2T9hBv/V3/2B3NDavV9dF9fpcVG9Ov1SKQXqqYNziDBtz1f77abvkIReo9z2ASJ1F+91KrioSP1eDMZREaM3zVwmTlLaUVl1YTzq4wF9jno72pvtdtdsXDlc82vjj0XwAmT1Mtu/n5Qt9T/IL15JS1WD9/G7uah5v325TQ0zbJvnEQX/0jNv0JNwOVQEXDn9Ck370f3UtBld27ARH19AzTH2K47nzvc2Q6vzz9h51QwJPyk18QNG+/8bF7v67hL6kc+8h3PwtXv+6QmyffT076YVnlH78MdSHd3riw8TYESD+s8iu+F1BSqtTiRqsDRP3DiKHnnP36Vp5XLlUhmMmn4fYH8aVNCX2+Pvcnvn/RwqPGw3ClJyxaesfaZ17c+eUy84LiaVB+66Y7VRpnzObqpu+m+Zo21nz0apD9CT744ujpzQ0M7snp/kHmIsG2tpEuzQ8cmEwkkk/kdAyacp0UKloVQbJDJdamquh689oa7a0ZvK76ksonUVXHmknMu+RH98jfoU5tn/sIR4KmKIn19dq+sUpOOU6fiIp+cJ+maS2aVz6nYIT6e7einO0n/jmp0/FBYuqURkyxYaG9rRaiiEppW1HDpECTMpIDXB5ecffHTOzf/cXCQcFFJ/dB136047antX5RkwdO/n1bocRwX5bmgqmrqbN3ndOqIRvuguYNYSJ1VUM+F947Ecvp0dH6fOyKP1zvCj+8Od9qV1ny+44wAPc3zFq66ZNvrL220hwcVpaO65qY7/BSTW0MRTiazFpMEl4Xz9HBe35D9yNN5mKaFy6oO4vRQmsJ7Mv5Afdn/7cp/jrLyClsqGYlEHBHSpTV1M3CiQNqrD5Z04YN33fTytCX1qhu/VQdFe5S8js/T4pTEwi5FdzhHNF8eqccx0pCWwmxvCjwT3wOvkwSOlaGnu/IHgvbgio72VlRW15DKOHGJDbp0F13yBxatfHd4Wr96iS2hYC/jnMI887EuSB5rA9ozPPSxF91J6vmjubwUBaezkuLsSWdSLtMw7AfJobws6WY2nwLBMvshvQ2opHv52rRI9UviKrrzy3AcEbVc9ryaL7fxBLXUM9SEoHhDKmVBq6gzMkkqe2LRSBnbo0dbDkN3u22JffsgjCmbVJdd9+3ZsiT/J44z4qaGnoyGLW0yZs6oh+yr5LSyrSfISVCqq2u9JNH9g0oFykOVeDtBhLZPiVT23V0u5110E1U4zkhZCh4/5IEINFC7PzYQIsmy5nZzdbtkTwWiqm93glhqntIVLNBPvdiEfNF09GihELAyR0SNNmI0xCjoLj3hdLrcA/mmtxPUYb8xaVI/8IXvVFlZ+ZsSR5aONwRP80UqSnOMa/r5g8HyUsm2C2Hsm3TzdxmOD2NUdP54QQgrSY6BOlGojkwneRJB5+MIkZGFNTlSKahcIyzpRpwICB6Dm1ad5BUtXbocjY1NKH1IUUtoLZMgVUiaYn6GhGYWTgQkSrBAuKiDx5GjLejt7UXJQ4g3FlR0tRXcZtbd6J0lKdod0hS9pqmAfHqJgyGcTk6nT9gr+qYMIUn/fde3vvyXgiVVk10f5QwjTgwsMuZLRE8WDkOITfy/IFKv/vQ9ZdQUr8aJAtklHFCZSi7pbUSyPNXzKn8piFThzN5Aoj179PqA08KyGgN13qKWzNvWr5E17HTJyQJ6/tvvvXe9HS2f0E5dd903KVchf3C0XVrptnDjKoGqqkp76qHH/hbDpoNFqPLm4fiA/YYI+WSSVCE/M/B1QklVHc611KsdY5eubUqhMuC2JzPQ0j24Yn4KHzo1Bb9zml6WLHhMuWQaU5q4/G2B4DEZVua5geWJm7+ifCDffn/c78BvNreir4OC3SI3M8aqGRl8eFES0xIwipbYs0fg5AHd7n4ri8Hw+bjd6zW33LaEOuGv09djcrs8XGZfnwOP74jC7zDRVK7k5oZy89tygD1dCpxmH26a04KLqzoQcmTwRmyCyhBJkHhKSjqVpLySAydN729h40P33Hz/wOK4OtUylX/SFBF6x8wMZgWomSv978KDPagLhyMydnSE8Kv9Am90x/Cps3Ll4muaMuiNZ7B1VyvK+9WsXzUwzmidHEQuWp2lnJO3BIIjhcKC8vTw5TFJ5TonyNY7llZl8O5TMiR9o+kwsawaWNOYwbOHHdjU7MEjO7pwxVKdbFqB986zYER4EFgu/+EjUvkcWWss3WDPbNL/TZw05hTrU1nO/mn4ujF1qqSYZ3MH5XVaeQgdgo86pkvnpPGFs1M4QCRuejM3dpbfB71uZZDSV7nnVk7Nv8IxoVdUkpXd44Ee/vZf/uDmEXNYjympFL38IP2Tt7RIiPYm7JlxTDP3+kx+yWtTuYrTG532xC+MGrJVP3eOTKQOPQAe8OCpKEesI8xTR+C88i5sODqWU5aTTB55Ip9MnpQpfj16Vd42ZntQmnGItg6W6PDN8mfwrWzURB1SFqtnWlg7SyDkGbu5ZpMpxMPdSJkSHj5Sj73xUZU/uSkoeCC/lM2mkc1k4fZ4cTwwMEyoOCdDxIC1ZMMdNx8avjq/pKrGewYI9TkEZgUN1PssVFHP7tb6y3OylOlMaJThVHDXyybeNzuB02fklzBNd8Hp90H0RbCqvBv7Ex57oNjQtUkD82/ZgRPu+Y8HuFaLO0HKEqAokPDyorLelg2jVuclldJC60husLTawMcWk3mjjG818qjmt7rHV4c6D7S1LMxGDDNcSRxKDllpkjRUnMpSquseHA9wnRZPWFssUNTn9/mGtR/DxEc/c1eI5OZ0/s79cSFZCs4ezQlNvCNLq8PlworgUGyU7Xwx7E0zXAM11RrS8WBXCGazRbV9LcV8LN/6YyQ1LVur6ZbsGVv29ylo6RNkDpn2q4cTWX7FOxlJWQvRtLAnNHSQFJ9BHZbfNTERsiLDHQpiuRnGs91phNO5gofhBWz2NEhcOR2qgIf06uGWg4NzRE8HXEld3EI16ckN3791X74tx5BKQYxPDJjo8YyE215y2WXd/D5St1NBQJfhIZWnq0SoTGvJCZIUA2tmFyZd3LN7Q2U4vSwqnmjjl/nY7SEnPiS2an9kiiVKUY49J2f8+be5sNql5h6qTh/eVVdYyvtnXON+T+Z3TkvoS1h4+kgvKqsnXeY1JuhBPzDWthGkfuJL3/Il0+Lc4esCbhXXLtfI/TSp0zLoJnI6Q1VymiGXOJ5cUlZxOLCi0bSe7bTosSj2IF4mRyOHwl9Gv+U3UKG2oIx+aPlcEwEXtRbNgkfLkakQYewKM8H8+0xk7lrEsXEHftnp4RT+vEsUrbaKTtkpW0NRqdEY8SuJhIMHvo6omQmQcb+sKgulSGqOC81Swgnh9ynnLa2EX5eUUGIv6jyGTRpLoSQVMUJFJD93IAXd4y+aKUXP7qUH7r7x4FjbR5AqVPkSaZT62tOewb8+2oVZIcU2+nnePdme7DDXX59SqWFJXf5iMFYZMeFGVHjIWXUhLkiVSC5khWZvIy1ACa8oTvNkIR2nuFQ4ZuLlQ2T3hopmUdDFSg+Pt8MgqZ/4BDV9IZ03egdd19GXqcPm9pTd3mT7xS1y/6uKJaT3pMj/j+MfFrtQ4VVs47qPdu1UatGh1HOwYeQJR3GnScZxI5Tx5O4EolkSiCJlEagdHUxJxuPj7TNIatznXEA8zcvXQLgscazSRB7juaUrgx1PU6B6mRfbKUHbldVx7vIauAswX2QUNxUzHGyxbG2mNqL7itf0YT3x29tvGTdfPqz5yyvpZyswBbAHZGrVeHhPbjkUcMHtKswrygiHPcNfsaTVFLL9JnXG4a4EDoSzqKorWlY9KyzjxxPtNEiqDGlahbvD4XMX3tRScNgk8Cvkpoo0PZheBNArfEhAJ2JzpHYrUdTWkAno1e23//LQIi4w5jdNTM0JELvMtoZdE+1lk8ozQdAB70SRUKiUMtJEakLoCEhRTAYWSWQfdXNHRRV6RAD5plXUgy588L0hvPTKXuzZ22Y7EzyMcqpelSTkRzdsuHLCyRZtUuWG1bMpNFe0WlOHNhn7iwIzorJgUpk8JvGQVU92w/g9OneaL77yJl7b2476GU3T9ajCWSX7f4XsaN+9bJgXoIgQk+x7ukTQ1oUTwaB9mq0Z2GPNnpBQxlstYRwiq6W8omr6LqqEPz982y37C9l1YM7ii1FEWJNklRItRGzZmNtZ4niK0zezDWgRtYMd0XiIxpPY8vpRqE7XtHt+DvpYGfMhSZIK6nTkS69b76bQ5lkoIhLpyb/MIYzyvHrRpFBgrLObQoUBdMuFaSh+CFt2HoKsFmeECj2TPUlv5slC91edmn8WB4WKaX8nU9nJHkJ60k8elw6vlBtnygHlVCSKDEmcQbZBZ3A2RIESd6SjF+EIOT5ykXx9If73sW9/ueCeVFVV+VQitKhR4WgiM+aM5WOBPa9OUU7phgTS8ThSlCWwzJwaibtCyCqFDyvfe7CTM5coEjoysvnIZA6gYI+8GEUGTxmXyhjQnZOTlLa0B0f3dmC2N4vhh0Zd1QWfo6cvjiNk9DscRUuZPP7I7bdOasp6lSRqabFT7FnDQjyZmTSpXSkNP34hi7nlwDsagTNr7acOSy68524+2lU8Qu2EgXhssgep9CSKXsjL8+qHIylUBAtrstyxpEmyW8M95AcqeKNbwuvdFEPdaeE9s4GFS8neLrBgpTdWzIpr8XxEdD8z2aPUrBBXOyX5VrIaPoUioquXOpzG8rzb7EhWNInOngjC3RG0dvSgoydO/oeEplmn2K5k7u1oJp6LCezc3o1L186c0DTi13XGU1N+jdRo8FtX7tl459cm/fYf9dd3fG7vJTfdcXMAeJpu90pJli6k9WWYJjp6k/bQck6JpMks6uiOoq2TSOxLIBJPUSraoCiSSaFEBapGOa4yT27azn4XMpf8y6mPXsqCHjjc2T/bj0B1RTCvK5wlXZ5MZ/ktYJguqJ9tgak8hyngmEf/wZu/v1AW6lrKGr+f7NfTyHasnMRANO6uu+mKjqQzyfgZ86rO0Z0ant2yG4rLh4lG5HHAI1/Kw35prMHvjVaQJIKz6QRWLJ6J0+Y3kvkydGnxZBq/f/5NeiLTJ5Xu/7sP3PG5L2IKGLM9cd746uu/F7JUpVJS5QUkRVUUoqZUi+WlZqFSsM4Qkpwg37EPitlOT7XHkpIHM05fVDWT0fDhtnNMM/0UT1Kou/3QHBMHWXjOk0KGlDPJ8WgE5T4VF56zCF53rmNKktf1yz9shcsTmO4Y1YyRdM7dcO/1h6Zy8HErreNp3isWeFs0p6Nge4hnp3Dyq4wKNEfsDi4Zw+LZ1agi9dF8pBObd+yjh2PYM076/EG4XFNxU6X7f/mDmz6GKeK41itedfMd95G3fG2h+/MkCPacVJPMetqxATqWp0vi7243+zISmXYZO/1DIT+DUt/7SE8GSS37qQfSB2sNhF3rGaVt+2ndW0JYj8tZx8YHfnhDD6aI4zqOm3LjfyIpubbQ/Tnnn0olKS82uctiSWS1UVlVM9YuPZohn3f/3Td2DaxYt269rY82bFhf1JfRMP4fZrRVURS9YmoAAAAASUVORK5CYII=",
    },
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#2d92a4",
        textBlockTextColor: "#fff",
        backgroundColor: "#ecf0efe8"
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
    isPresenter: true,
};
DiptychWithPresenter.parameters = {
    docs: {
        source: {
            code: `<Diptych {...${JSON.stringify(DiptychWithPresenter.args, null, 2)}}/>`,
        },
    },
};