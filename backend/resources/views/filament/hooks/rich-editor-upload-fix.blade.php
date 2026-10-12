<script>
    (function () {
        let pendingUpload = null;
        let pendingUploadTimeout = null;

        function clearPendingUpload(validationMessage = null) {
            if (! pendingUpload) {
                return;
            }

            const detail = pendingUpload;

            window.dispatchEvent(new CustomEvent(
                validationMessage ? 'rich-editor-file-validation-message' : 'rich-editor-uploaded-file',
                {
                    bubbles: true,
                    detail: validationMessage
                        ? { ...detail, validationMessage }
                        : detail,
                },
            ));

            pendingUpload = null;

            if (pendingUploadTimeout) {
                clearTimeout(pendingUploadTimeout);
                pendingUploadTimeout = null;
            }
        }

        window.addEventListener('rich-editor-uploading-file', (event) => {
            pendingUpload = event.detail;
        }, true);

        window.addEventListener('rich-editor-uploaded-file', () => {
            pendingUpload = null;

            if (pendingUploadTimeout) {
                clearTimeout(pendingUploadTimeout);
                pendingUploadTimeout = null;
            }
        }, true);

        window.addEventListener('rich-editor-file-validation-message', () => {
            pendingUpload = null;

            if (pendingUploadTimeout) {
                clearTimeout(pendingUploadTimeout);
                pendingUploadTimeout = null;
            }
        }, true);

        document.addEventListener('livewire-upload-error', () => {
            clearPendingUpload('Image upload failed. Please use a JPEG, PNG, WebP, or GIF under 2 MB.');
        });

        document.addEventListener('livewire-upload-finish', () => {
            if (! pendingUpload) {
                return;
            }

            if (pendingUploadTimeout) {
                clearTimeout(pendingUploadTimeout);
            }

            pendingUploadTimeout = setTimeout(() => {
                clearPendingUpload('Image upload failed. Please use a JPEG, PNG, WebP, or GIF under 2 MB.');
            }, 5000);
        });
    })();
</script>
