import React from "react";
function Loadable({loader, loading}){

    class AsyncComponent extends React.Component {
        state = {
            mod : function(){
                return <div>不支持按需加载</div>
            }
        }
        componentWillMount() {
            this.load();
        }
        load() {
            this.setState({
                mod: function(){
                    return <div></div>
                }
            });
             loader().then((mod) => {
                this.setState({
                    mod: mod.default ? mod.default : mod
                });
            });
        }
        render() {
            const M  = this.state.mod;
            return <React.Fragment>
                <M {...this.props}/>
            </React.Fragment>;
        }
    }
    return (props) => <AsyncComponent {...props} />
}
export default Loadable;