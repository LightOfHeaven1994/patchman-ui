import React from 'react';
import { Button } from '@patternfly/react-core';
import { intl } from '../../Utilities/IntlProvider';
import messages from '../../Messages';

export const useCreatePatchSetButton = (setWizardState) => () =>
    (<Button key='createButton' onClick={() => setWizardState({ isOpen: true })}>
        {intl.formatMessage(messages.labelsButtonCreatePatchSet)}
    </Button>);

export const patchSetColumns = [
    {
        key: 'name',
        title: 'Name',
        props: {
            width: 50
        }
    },
    {
        key: 'systems',
        title: 'Systems',
        props: {
            width: 50
        }
    }
];

export const usePatchSetRowActions = (showBaselineModal, handlePatchSetDelete) => [
    {
        title: 'Edit patch set',
        onClick: (_event, _rowId, rowData) => {
            showBaselineModal(rowData);
        }
    },
    {
        title: 'Remove patch set',
        onClick: (_event, _rowId, rowData) => {
            handlePatchSetDelete(rowData);
        }
    }
];