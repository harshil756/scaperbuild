<div
    <?php echo e($attributes
            ->merge([
                'id' => $getId(),
            ], escape: false)
            ->merge($getExtraAttributes(), escape: false)); ?>

>
    <?php echo e($getChildSchema()); ?>

</div>
<?php /**PATH /media/harshilsoni/6C6A2A5D6A2A23F41/scaperbuild/backend/vendor/filament/schemas/resources/views/components/grid.blade.php ENDPATH**/ ?>