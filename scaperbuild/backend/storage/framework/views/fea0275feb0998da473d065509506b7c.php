<input
    <?php echo e($attributes
            ->merge([
                'id' => $getId(),
                'type' => 'hidden',
                $applyStateBindingModifiers('wire:model') => $getStatePath(),
            ], escape: false)
            ->merge($getExtraAttributes(), escape: false)
            ->class(['fi-fo-hidden'])); ?>

/>
<?php /**PATH /media/harshilsoni/6C6A2A5D6A2A23F41/scaperbuild/backend/vendor/filament/forms/resources/views/components/hidden.blade.php ENDPATH**/ ?>