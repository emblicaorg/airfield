{{#each data}}
<div class="block span4" data-frontend="{{this.name}}">
	<strong class="editable frontend-title">
		{{title this.name}}
	</strong>
	<small contentEditable="true" class="editable frontend-name">
		{{first this.items}}
	</small>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Host <button class="btn btn-mini btn-success add-host"><i class="icon icon-plus"></i></button></th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody class="frontend-hosts">
			{{#iters this.items}}
			<tr>
				<td contentEditable="true" class="editable frontend-host-item">
					{{this}}
				</td>
				<td>
					<button class="btn btn-mini btn-danger remove-host"><i class="icon icon-trash"></i></button>
				</td>
			</tr>
			{{/iters}}
		</tbody>
		</table>
	<button class="btn btn-primary save" disabled="true"><i class="icon icon-book"></i> Save</button>
	<button class="btn btn-danger remove"><i class="icon icon-trash"></i> Remove</button>
</div>
{{/each}}
