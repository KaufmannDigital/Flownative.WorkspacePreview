import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import {$get} from "plow-js";
import {neos} from '@neos-project/neos-ui-decorators';
import {Button, Icon} from '@neos-project/react-ui-components';
import {selectors} from '@neos-project/neos-ui-redux-store';
import style from './style.module.css';

@connect((state) => ({
  documentNode: selectors.CR.Nodes.documentNodeSelector(state),
  focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
  activeDimensions: selectors.CR.ContentDimensions.activePresets(state),
  baseWorkspace: selectors.CR.Workspaces.baseWorkspaceSelector(state),
}))

@neos((globalRegistry) => ({
  i18nRegistry: globalRegistry.get('i18n'), serverFeedbackHandlers: globalRegistry.get('serverFeedbackHandlers'),
  dataSourcesDataLoader: globalRegistry.get('dataLoaders').get('DataSources')
}))

export default class LinkView extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };


  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      linkUrl: '',
      error: 'none'
    }
  }

  componentDidMount() {
    this.loadTokenLink();
  }

  loadTokenLink() {
    this.setState({isLoading: true});
    this.props.dataSourcesDataLoader.resolveValue({dataSourceIdentifier: 'PreviewLinkView', contextNodePath: this.props.focusedNodePath, dataSourceDisableCaching: true}, '')
      .then(data => {
        this.setState({
          isLoading: false,
          linkUrl: data.data.error === 'none' ? data.data.link : '',
          error: data.data.error,
        });
      });
  }

  render() {

    if (this.state.error !== 'none') {
      return (
        <div>
          <label className={style.linkViewLabel}>{this.props.i18nRegistry.translate('Flownative.WorkspacePreview:Main:previewLink', 'Preview Link')}</label>
          <div className={style.linkView}>
            <div className={style.linkViewError}>{this.props.i18nRegistry.translate('Flownative.WorkspacePreview:Main:error.' + this.state.error, 'Error: ' + this.state.error)}</div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <label className={style.linkViewLabel}>{this.props.i18nRegistry.translate('Flownative.WorkspacePreview:Main:previewLink', 'Preview Link')}</label>
        <div className={style.linkView}>
          {this.state.isLoading ? <Icon className={style.loader} icon="spinner" padded="right"/> : null}
          {!this.state.isLoading ? <Clipboard
            className={style.linkViewButton}
            data-clipboard-text={this.state.linkUrl}
            component={Button}
            button-style="lighter"
          >
            <Icon icon="copy" padded="right"/>
            {this.props.i18nRegistry.translate('Flownative.WorkspacePreview:Main:copyPreviewLink', 'Copy Preview Link')}
          </Clipboard> : null}
        </div>
      </div>
    );
  }
}
